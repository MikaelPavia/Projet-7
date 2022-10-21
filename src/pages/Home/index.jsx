import styled from "styled-components"
import LocList from '../../datas/LocationList'
// import { Link } from "react-router-dom"

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
background-image:;
background-color: #00000030;
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

const Card = styled.a `
  height: 330px;
  width: 360px;
  background: rgb(97,0,0);
  background: linear-gradient(0deg, rgba(97,0,0,0.5956757703081232) 0%, rgba(239,108,108,1) 20%, rgba(239,108,108,1) 100%);
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  align-items: center;
  text-decoration: none;
  &:hover {
    box-shadow: grey 5px 5px 5px;
  }
`

// const Card = styled.div `
//   height: 330px;
//   width: 360px;
//   background-color: #EF6C6C;
//   margin: 15px;
//   border-radius: 10px;
//   display: flex;
//   // align-items: end;
//   flex-direction: column;
//   padding-bottom: 15px;
//   // padding-left: 15px;
//   align-items: center;
// `

const CardImg = styled.img `
  width: 95%;
  border-radius: 10px;
  background-color: ;
  height: 270px;
  margin-top: 8px;
`

const CardTitle = styled.div `
color: white;
width: 60%;
font-size: 18px;
margin-top: 15px;
margin-right: 100px;
`

function BannerHome(picture) {
    return (
      <Body>
        <DivBanner>
          <Banner>Chez vous, partout et ailleurs</Banner>
        </DivBanner>

        <CardsContainer>
          {LocList.map((loc) => (

             <Card key={loc} href='./pages/Error'>
                <CardImg src={loc.cover} alt="Illustration d'une location"></CardImg>
                <CardTitle>{loc.title}</CardTitle>
             </Card>
          ))}

        </CardsContainer>
      </Body>
    )
  }




  
  export default BannerHome