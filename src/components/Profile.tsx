import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import style from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengeContext);
    return(
        <div className={style.containerProfile} >
            <img src="https://lh3.googleusercontent.com/-wYXHa5wbaO0/W7B6TYIm3pI/AAAAAAAAAuo/ACkjffZhFkYUPB0JKjWNtPWALQg9HL2vwCEwYBhgLKtQDAL1OcqzxciWQOYmIQOGTtnJd_KxWIZo3WdaHvPOmeQBlU8lbHDuxuj02rTcIklXKvQ6dbTWxs2tQY746XHUqwcjdHvc0kRPKCDOQu5PVjh_A_EAHVm3k3fZT2-tNY5Og6dfrclmG40JKu4j9X5wQv5_z7_Cx7C1MxftLedsLkzu_7TjPfx6B-djd-ndJN1PMtNfOBxcpDxOCL6TZYn2cf8ZgGxTjifSFQbWPZdWP7sYhJAU9ypbCR0S4PFLFO_JC8O8HkHDWfypcMN6mB65qSVe6koPrZuYdR5IflmYEZCwBEJrRKblHiqvn9iv-QUX8vqFQaEcglp6mqUiqYv5iEMj5UTLHMSGNiJJqAv2FUn0qVQ9QcFm9czXJ92k2zMPK7XGo9MYGCxPtIlBoXpBI_dTqyIrK9cVwbFP6qC82vTSEARz94jrX87JSsFVIuW_DZwzOYJunhjXjgZpfee5fkW5ShXZ-H2mR1Y9kxv3v4kav3a7OYbSlwdG8rPd7GuwUapbBJo79Bj8PmH2H8KUgJ2AO1K2OLkDsO84zbVpaxu6zHcwejBRlbaXHqrDgP9Uj8rLNA3Usv02tBNLzxYEQAP6U3D3refHcZBRW5VuZogrxIeUsMO7wwoIG/w139-h140-p/IMG_20180916_095744.jpg" 
                alt="Luis Sando"
            /> 
            <div>
                <strong>Luis Sando</strong>
                <p>
                    <img src="icons/level-up.svg" alt="level up"/>
                    Level { level }
                </p>
            </div>
            
        </div>
    )
}
