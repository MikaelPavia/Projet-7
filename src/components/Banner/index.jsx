import BanniereImg from '../../assets/banniere.png'
import styled from "styled-components"

const DivBanner = styled.div`
min-width: 90%;
height: 200px;
margin-top: 100px;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${BanniereImg});
background-size: cover;
border-radius: 15px;
position: relative;
z-index: 0;
`
const Banner = styled.div `
height: 50px;
color: white;
font-size: 45px;
// display: flex;
// align-items: center;
// justify-content: center;
position: absolute;
z-index: 1;
`
const BannerBackgroundColor = styled.div `
min-width: 100%;
height: 200px;
border-radius: 15px;
position: absolute;
background-color: black;
opacity: 30%;
z-index: -10;
`

function PrintBanner() {
    return (
        <DivBanner>
            <BannerBackgroundColor></BannerBackgroundColor>
            <Banner>Chez vous, partout et ailleurs</Banner>
        </DivBanner>

// {/* <DivBanner src={picture} alt={alt}>
// <Banner>Chez vous, partout et ailleurs</Banner>
// </DivBanner> */}

)
}

export default PrintBanner

