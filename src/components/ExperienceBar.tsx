import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import style from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    
    return(
        <header className={style.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{width: `${ percentToNextLevel }%`}} />
                <span className={style.currentExperience} style={{left: `${ percentToNextLevel }%`}}>
                    {currentExperience} px
                </span>
            </div>
            <span>{ experienceToNextLevel } px</span>
        </header>
    )
}