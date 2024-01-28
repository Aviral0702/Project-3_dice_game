import { useState } from "react";
import styled from "styled-components";

export default function NumberSelector({setError,error,selectedNumber,setSelectedNumber}){
    const arr =[1,2,3,4,5,6];
    
    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }

    return(<Container>
        
        <div className="flex">
        {arr.map((value,i)=>(
            <Box key={i} 
            onClick={()=>numberSelectorHandler(value)}
            isSelected ={value==selectedNumber}
            >{value}</Box>
        ))}
        </div>
        <p>Select Number</p>
        <p className="error">{error}</p>        
    </Container>)
}   

const Box = styled.div`
    width:72px;
    height:72px;
    border:1px solid black;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:700;
    background-color: ${(props)=>(props.isSelected ?"black" :"white")};
    color: ${(props)=>(props.isSelected ?"white" :"black")};

`
const Container = styled.div`
display:inline-flex;
flex-direction:column;
align-items:flex-end;   
.flex{
        display:flex;
        gap:24px;
        margin-bottom:30px;
        height:72px;
    }
p{
    font-size:24px;
    font-weight:700;
    width:182px;
    height:36px;
}
.error{
    font-size:24px;
    font-weight: 800;
    margin-top:36px;
    color:red;
    
}

`