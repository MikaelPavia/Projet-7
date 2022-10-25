import BanniereImg from '../../assets/banniere.png'
import styled from "styled-components"

const DivBanner = styled.div`
width: 90%;
height: 200px;
margin-top: 100px;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${BanniereImg});
background-size: cover;
background-color: #00000030;
z-index: 1;
border-radius: 15px;
`

const Banner = styled.div `
height: 50px;
color: white;
font-size: 35px;
display: flex;
align-items: center;
justify-content: center;
`

function PrintBanner() {
return (
    <DivBanner>
        <Banner>Chez vous, partout et ailleurs</Banner>
    </DivBanner>
)
}

export default PrintBanner