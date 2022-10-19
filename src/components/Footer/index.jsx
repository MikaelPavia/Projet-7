import styled from "styled-components"

const FooterStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: auto;
height: 200px;
background-color: black;
margin-top: 100px;
`
const DivFooter = styled.div`
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
`

function Footer() {
    return (
      <FooterStyle>
        <DivFooter>LOGO</DivFooter>
        <DivFooter>2020 Kaza, All rights reserved</DivFooter>
      </FooterStyle>
    )
  }
  
  export default Footer