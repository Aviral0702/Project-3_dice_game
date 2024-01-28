import styled from "styled-components"
import "../App.css"
import { Button } from "../styled/Button"
export default function StartGame({toggle}){
    return(<Container>
        <div>
        <img src="images/depositphotos_8318445-stock-photo-dices-in-mid-air.jpg" alt="logo" />
       
        </div>
         <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    
    </Container>)
}

const Container = styled.div`
    max-width:1180px;
    display:flex;
    align-items:center;
    height:100vh;
    margin:0 auto;
    .content{
        h1{
            font-size:96px;
        }
        
    }

`

