import styled from "styled-components"
import Logo from '../../assets/FooterLogo.png'
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
const FooterLogo = styled.img`
display: flex;
align-items: center;
justify-content: center;
font-size: 50px;
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
        <FooterLogo src={Logo} alt='Logo Kasa'></FooterLogo>
        <DivFooter>2020 Kaza, All rights reserved</DivFooter>
      </FooterStyle>
    )
  }
  
  export default Footer