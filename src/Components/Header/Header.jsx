import React from "react";
import styled from "styled-components"

const HeaderStyle = styled.header`
    background-color: #f0aec4;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 22vh;
`
const Img = styled.img`
    width: 10vw;
    border-radius: 100%;
`
const Ul = styled.ul`
    cursor: pointer;
    color: white;
    font-size: 1.3rem;
    list-style: none;
    text-shadow: 2px 1px 2px grey;
    width: 42vw;
    display: flex;
    justify-content: space-around;
`
const Li = styled.li`
     &:hover{
        color: gray;
        text-shadow: 2px 1px 2px white;
    }
`

function Header(){
    return(
        <HeaderStyle>
           <Img src="https://marketplace.canva.com/EADjfwfajP4/2/0/1600w/canva-azul-e-rosa-bal%C3%A3o-de-fala-animais-e-pets-logotipo-7lU87q6qmFU.jpg" alt="" /> 
           <nav>
            <Ul>
                <Li>Inicio</Li>
                <Li>Serviços</Li>
                <Li>Adote</Li>
                <Li>Trabalhe conosco</Li>
            </Ul>
           </nav>
        </HeaderStyle>
    )
}
export default Header