import styled from "styled-components";
import StartGame from "./component/start_game";
import { useState } from "react";
import GamePlay from "./component/gameplay";


export default function App(){
  //we are using hook state here in order to change the page layout when the play now button is clicked
  const [isGameStarted,setIsGameStarted] = useState(false);

  function toggleGamePlay(){
    setIsGameStarted((prev)=>!prev);
  };
  return(
    <>
      {isGameStarted ? <GamePlay />:<StartGame toggle={toggleGamePlay} />} 
    </>
  )
}
