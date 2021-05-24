import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completedChallenges } = useContext(ChallengeContext);
    const { resetCountdown } = useContext(CountdownContext)
    
    function handleChallengeSucceeded(){
        completedChallenges();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }
    
    return(
        <div className={style.ChallengeBoxContainer} > 
            {activeChallenge ? (
                <div className={style.ChallengeBoxActive}> 
                    <header>Ganhe { activeChallenge.amount }xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>

                    <footer>
                        <button 
                         type="button"
                         className={style.ChallengeBoxFailedButton}
                         onClick={handleChallengeFailed}
                         >
                            Falhei
                        </button>
                        <button 
                         type="button"
                         className={style.ChallengeBoxSucceededButton}
                         onClick={handleChallengeSucceeded} 
                         >
                            Completei
                        </button>
                        
                    </footer>
                </div>
            ): (
                <div className={style.ChallengeBoxNotActive}>
                    <strong>Complete um ciclo para obter um novo desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </div>    
            )}
            
        </div>
    )
}