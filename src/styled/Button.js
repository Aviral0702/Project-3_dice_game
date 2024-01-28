import styled from "styled-components"

export const Button  = styled.button`
    padding: 10px 18px;
    border-radius: 5px;
    background: #000;
    color:white;
    min-width:220px;
    border:1px solid transparent;
    font-size:16px;
    transition: .3s background ease-in;
    &:hover{
        background-color:white;
        color:black;
        border:1px solid black;
        transition: .2s background ease-in;

    }
    
`
export const OutlineButton  = styled(Button)`
    background: white;
    color:black;
    border:1px solid black;
    &:hover{
        background-color:black;
        color:white;
        border:1px solid transparent;
        transition: .2s background ease-in;

    }
`