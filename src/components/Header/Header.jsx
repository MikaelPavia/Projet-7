import { Link } from 'react-router-dom'
import Logo from '../../assets/HeaderLogo.png'
import '../Header/Header.scss'


function Header() {
    return (

        <div className='headerContainer'>

            <div className='headerStyle'>
              
                <img src={Logo} alt='Logo Kasa' className='headerLogo'/>

                    <nav className='headerNav'>

                    <Link to='/' className='navLinks'>Accueil</Link>

                    <Link to='../about' className='navLinks'>À propos</Link>
                    
                    <Link to='../contact' className='navLinks'>Contact</Link>
                    </nav>

            </div>
            
        </div>
    )
}

export default Header