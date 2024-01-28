import styled from "styled-components";
import TotalScore from "./totalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
const GamePlay =()=>{
    const [selectedNumber,setSelectedNumber]= useState(false);
    const[CurrentDice,setCurrentDice] = useState(1);
    const [Score,setScore] = useState(0);
    const [error,setError] = useState("");
    const [showRules,setShowRules]= useState(false);
    const generateRandomNumber=(min,max)=>{
        return(Math.floor(Math.random()*(max-min)+min));

    }
    const resetScore=()=>{
        setScore(0);
    }
    const rollDice =()=>{
        if(!selectedNumber){
            setError("You have not selected any number!!");
            return;

        }
        setError("");
        const randomNum = generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNum);

        
        if(selectedNumber==randomNum){
            setScore((prev)=>prev+randomNum);
        }
        else{
            setScore((prev)=>prev-2);
        }
        setSelectedNumber(undefined);
    };
    return(<Container>
            <div className="top_section">
            <TotalScore score={Score} />
            <NumberSelector setError={setError} error = {error} selectedNumber={selectedNumber} setSelectedNumber= {setSelectedNumber}/>
            </div>
            <RollDice CurrentDice = {CurrentDice} rollDice={rollDice} />
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide" :"Show" } Rules</Button>
            </div>
            {showRules && <Rules />}
        </Container>)
}

export default GamePlay;

const Container = styled.div`
    padding-top:70px;
    .top_section{
        display:flex;
        justify-content:space-around;
        align-items:end;
    }
    .btns{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:24px;
        margin-top:36px;
    }
`