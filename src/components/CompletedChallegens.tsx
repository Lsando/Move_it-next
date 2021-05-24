import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import style from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){
   const { challengesCompleted } = useContext(ChallengeContext);
    return(
        <div className={style.CompletedChallengesContainer} >
            <span>Desafios completos</span>
            <span>{ challengesCompleted }</span>
        </div>
    )
}