import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
display: flex;
justify-content: center;`

const HeaderStyle = styled.div `
display: flex;
justify-content: space-between;
width: 90%;
`
// const HeaderLogo = styled.img `
// height: 80px;
// width: 200px;
// border: 5px solid red;
// `

const HeaderLogo = styled.div `
height: 80px;
width: 200px;
font-size: 80px;
display:flex;
justify-content: center;
align-items: center;
color: #EF6C6C;
font-weight: bold;
`

const Nav = styled.nav `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px
`
const StyledLink = styled(Link)`
    padding: 15px;
    color: #EF6C6C;
    text-decoration: none;
    font-size: 25px;
    &:hover {
      text-decoration: underline;
    }

`
function Header() {
    return (
      <HeaderContainer>
        <HeaderStyle>
          {/* <HeaderLogo src='' alt=''/> */}
          <HeaderLogo>Kasa</HeaderLogo>
          
          <Nav>
            <StyledLink to='/'>Accueil</StyledLink>
            <StyledLink to='./pages/A_propos'>À propos</StyledLink>
          </Nav>
          
        </HeaderStyle>
      </HeaderContainer>
    )
  }
  
  export default Header