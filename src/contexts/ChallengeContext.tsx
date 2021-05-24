import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookie from 'js-cookie'
import Challenge from '../../challenges.json'
import LevelUpModal from '../components/LevelUpModal';

interface IChallenge{
    type: 'body' | 'eye',
    description: string,
    amount: number;
}

interface ChallengesContextProvider{
    level: number, 
    levelUp: () => void,
    currentExperience: number,
    challengesCompleted: number,
    experienceToNextLevel: number,
    activeChallenge: IChallenge;
    startNewChallenge: () => void,
    resetChallenge: () => void,
    completedChallenges: () => void,
    closeLevelUpModal: () => void,
    
}


interface ChallengeContextProps{
    children: ReactNode;
    currentExperience: number, 
    challengesCompleted: number, 
    level: number
}
export const ChallengeContext = createContext( {} as ChallengesContextProvider );

export function ChallengesProvider({ children, ...rest }: ChallengeContextProps){
    const [level, setLevel] = useState( rest.level ?? 1); // O operador ?? = se nao existir nenhum cookie para esse valor assuma 1
    const [currentExperience, setCurrentExperience] = useState( rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState( rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    
    function levelUp(){
        setLevel(level + 1);
        setIsLevelUpModalOpen(true)
    }

    function closeLevelUpModal(){
        setIsLevelUpModalOpen(false);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * Challenge.length)
        const challenge = Challenge[randomChallengeIndex];
        setActiveChallenge(challenge);

        new Audio('/hasty-ba-dum-tss-615.mp3').play();

        if (Notification.permission === 'granted'){
            new Notification('Novo desafio 🎉', {
                body: `Valendo ${ challenge.amount }xp`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completedChallenges(){
        if(!activeChallenge){
            return;
        }

        const { amount } = activeChallenge;
        let finalExperience = amount + currentExperience;
        if (finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }
        
        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);

    }

    useEffect(() => {
        Notification.requestPermission();
    }, []); //se o useeffect receber um um array vazio ele vai executar apenas uma vez assim que for carregada a pagina
    
    useEffect( () => {
        Cookie.set('level', String(level))
        Cookie.set('currentExperience', String(currentExperience))
        Cookie.set('challengesCompleted', String(challengesCompleted))
    }, [level, currentExperience, challengesCompleted])

    return (
        <ChallengeContext.Provider value={
            {
                level,
                levelUp,
                currentExperience,
                challengesCompleted,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completedChallenges,
                closeLevelUpModal
            }
        }>
            {children}
           { isLevelUpModalOpen && <LevelUpModal/> }
        </ChallengeContext.Provider>
    )
}