import { useState } from "react";
import styled from "styled-components";
const RollDice=({CurrentDice,rollDice})=>{
    return(<MainContainer>
        <div className="dice" onClick={rollDice}>
            <img src={`/images/dice_${CurrentDice}.png`} alt="dice 1" />
        </div>
        <p>Click on Dice to roll</p>
    </MainContainer>)
}

export default RollDice;

const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:48px;
    p{
        font-size:24px;
    }

    .dice{
        cursor:pointer;
    }

`;