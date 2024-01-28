import styled from "styled-components";

const Rules=()=>{
    return(<MainContainer>
        <Container>
        <h1>How to play dice game</h1>
        <div>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </Container>
    </MainContainer>) 
}

export default Rules;

const Container = styled.div`
    padding:20px;
    border:1px solid transparent;
    align-items:flex-start;
    display:flex;
    flex-direction:column;
    gap:24px;
    max-width:794px;
    background:#FBF1F1;

`
const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:64px;
`
