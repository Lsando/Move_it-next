import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import style from '../styles/components/LevelUpModal.module.css'; 

export default function LevelUpModal(){
    const{ level, closeLevelUpModal } = useContext(ChallengeContext)

    return(
        <div className={style.overlay}>
            <div className={ style.container } >
                <header>{ level }</header>
                <strong>Parabens!</strong>
                <p>Voce alcancou um novo level</p>
                 
                <button 
                 type="button"
                 onClick={ closeLevelUpModal }
                >
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>

            </div>
        </div>
    )
}