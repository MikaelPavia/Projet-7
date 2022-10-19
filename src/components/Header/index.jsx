import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
display: flex;
justify-content: center;`

const HeaderStyle = styled.div `
display: flex;
justify-content: space-between;
border: 1px solid black;
width: 90%;
`
const HeaderLogo = styled.img `
height: 50px;
width: 50px;
border: 5px solid red;
`
const Nav = styled.nav `
    border: 5px solid red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px
`
const StyledLink = styled(Link)`
    padding: 15px;
    color: #EF6C6C;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
`
function Header() {
    return (
      <HeaderContainer>
        <HeaderStyle>
          <HeaderLogo src='' alt=''/>
          
          <Nav>
            <StyledLink to='/'>Accueil</StyledLink>
            <StyledLink to='./pages/A_propos'>À propos</StyledLink>
          </Nav>
          
        </HeaderStyle>
      </HeaderContainer>
    )
  }
  
  export default Header