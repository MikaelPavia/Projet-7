// import styled from "styled-components"
import Logo from '../../assets/FooterLogo.png'
import '../Footer/Footer.scss'


function Footer() {

    return (

      <div className="footerStyle">

        <img src={Logo} alt='Logo Kasa' className="footerLogo"></img>

        <div className="footerDiv">2020 Kaza, All rights reserved</div>

      </div>
    )
}

export default Footer