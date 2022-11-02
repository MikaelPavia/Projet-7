// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import Logo from '../../assets/HeaderLogo.png'
import '../Header/style.scss'


function Header() {
    return (

        <div className='headerContainer'>

            <div className='headerStyle'>
              
                <img src={Logo} alt='Logo Kasa' className='headerLogo'/>

                    <nav className='headerNav'>

                    <a href='/' className='navLinks'>Accueil</a>

                    <a href='../about' className='navLinks'>À propos</a>

                  </nav>

            </div>
            
        </div>
    )
}

export default Header