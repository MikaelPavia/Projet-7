import styled from "styled-components"
import LocList from '../../datas/LocationList'
import Cards from "../../components/Card"
import BanniereImg from '../../assets/banniere.jpeg'

const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
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


const CardsContainer = styled.div `
height: auto;
width: 90%;
background-color: #f7F7F7;
margin-top: 100px;
border-radius: 15px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding-top: 40px;
padding-bottom: 40px;
`

function Home() {
    return (
      <Body>
        <DivBanner>
          
          <Banner>Chez vous, partout et ailleurs</Banner>
        </DivBanner>

        <CardsContainer>
          {LocList.map((loc) => (

          <Cards 
          key={loc.id}
          // LocArray={LocList} 
          id={loc.id}
          picture={loc.cover}
          title={loc.title}>
          
          </Cards>

          ))}

        </CardsContainer>
      </Body>
    )
  }

  export default Home