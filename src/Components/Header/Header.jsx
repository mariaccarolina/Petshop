import React from "react";
import styled from "styled-components"

const HeaderStyle = styled.header`
    background-color: #f0aec4;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Img = styled.img`
    width: 15vw;
    border-radius: 100%;
`


function Header(){
    return(
        <HeaderStyle>
           <Img src="https://marketplace.canva.com/EADjfwfajP4/2/0/1600w/canva-azul-e-rosa-bal%C3%A3o-de-fala-animais-e-pets-logotipo-7lU87q6qmFU.jpg" alt="" /> 
           <nav>
            <ul>
                <li>Inicio</li>
                <li>Serviços</li>
                <li>Adote</li>
                <li>Trabalhe conosco</li>
            </ul>
           </nav>
        </HeaderStyle>
    )
}
export default Header