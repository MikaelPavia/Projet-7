import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../assets/HeaderLogo.png'

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

const HeaderLogo = styled.img `
height: 60px;
width: 180px;
font-size: 80px;
display:flex;
justify-content: center;
align-items: center;
`

const Nav = styled.nav `
display: flex;
justify-content: space-between;
align-items: center;
width: 260px
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
              
                <HeaderLogo src={Logo} alt='Logo Kasa'/>

                    <Nav>

                    <StyledLink to='/'>Accueil</StyledLink>

                    <StyledLink to='about'>À propos</StyledLink>

                  </Nav>

            </HeaderStyle>
            
        </HeaderContainer>
    )
}

export default Header