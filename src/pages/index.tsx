//COMPONENTS
import { CompletedChallenges } from '../components/CompletedChallegens';
import { Countdown } from '../components/Countdown';
import {ExperienceBar} from '../components/ExperienceBar'
import {Profile} from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

//LAYOUT
import style from '../styles/pages/home.module.css';

//NEXT
import Head from 'next/head';
import { CountDownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next'
import { ChallengesProvider } from '../contexts/ChallengeContext';


interface HomeProps{
  currentExperience: number, 
  challengesCompleted: number, 
  level: number
}

export default function Home(props: HomeProps) {
  
  return (
    <ChallengesProvider  
      level={ props.level } 
      currentExperience ={ props.currentExperience } 
      challengesCompleted={ props.challengesCompleted }
    >
      <div className={style.container} >
        <Head>
          <title>Moveit 2021</title>
        </Head>   
        <ExperienceBar/>

        <CountDownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>

            <div>
              <ChallengeBox/> 
            </div>
          </section>
        </CountDownProvider>
        
    </div>
  </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  //simulacao de uma chamada a API
  const { currentExperience, challengesCompleted, level } = ctx.req.cookies;
  //console.log(user);
   

  return{
    props: {
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted), 
      level: Number(level)
    }
  }
}