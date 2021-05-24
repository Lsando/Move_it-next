import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountdownContextData{
    minutes: number,
    seconds: number,
    isActive: boolean,
    hasFinished: boolean,
    resetCountdown: () => void,
    startCountdown: () => void
}

interface CountdownContextProps{
    children: ReactNode;
}
let countdownTimeOut: NodeJS.Timeout;
export const CountdownContext = createContext({} as CountdownContextData);

export function CountDownProvider({ children }: CountdownContextProps){

    const minute = 25;
    const second = 60;
    const [time, setTime] = useState(minute * second);
    const [isActive, setIsActive] = useState(false);
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;

    const [hasFinished, setHasFinished] = useState(false);

    const { startNewChallenge } = useContext(ChallengeContext)

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setHasFinished(false);
        setTime(minute * second);
    }


    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeOut = setTimeout(()  =>{
                setTime(time - 1);
            }, 1000)
        }else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            isActive,
            hasFinished,
            resetCountdown,
            startCountdown
        }} >
            {children}
        </CountdownContext.Provider>
    )
}



/*
 estrutura de criacao de um contexto

import { createContext, ReactNode } from "react";

interface CountdownContextData{

}

interface CountdownContextProps{
    children: ReactNode;
}
const CountdownContext = createContext({} as CountdownContextProvider);

export function CountDownProvider({ children }: CountdownContextProps){
    return(
        <CountdownContext.Provider value={{}} >
            {children}
        </CountdownContext.Provider>
    )
}
*/