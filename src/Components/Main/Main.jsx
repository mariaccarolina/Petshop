import React from "react";
import styled from "styled-components"

const MainStyle = styled.main`
    background-color: #f0aec4;
    height: 78vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    width: 80vw;
    height: 60vh;
`

function Main() {
    return (
        <MainStyle>
           <Img src="https://st3.depositphotos.com/1981577/17526/i/450/depositphotos_175262694-stock-photo-red-haired-dog-red-rope.jpg" alt="" />
        </MainStyle>
    )
}
export default Main