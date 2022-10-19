import styled from "styled-components"

const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const DivBanner = styled.div`
border: 3px solid red;
width: 80%;
height: 200px;
margin-top: 100px;
display: flex;
justify-content: center;
align-items: center;
background-image:;
background-color: green;
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
width: 80%;
background-color: #f7F7F7;


// display: grid;
// gap: 24px;
// grid-template-rows: 350px 350px;
// grid-template-columns: repeat(2, 1fr);


margin-top: 100px;
border-radius: 15px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding-top: 40px;
padding-bottom: 40px;
`

const Card = styled.div `
  height: 280px;
  width: 280px;
  background-color: #EF6C6C;
  margin: 15px;
  border-radius: 20px;
  display: flex;
  align-items: end;
  padding-bottom: 15px;
  padding-left: 15px;

`
const CardTitle = styled.div `
color: white;
width: 80px;
font-size: 18px;
`

function BannerHome() {
    return (
      <Body>
        <DivBanner>
          <Banner>Chez vous, partout et ailleurs</Banner>
        </DivBanner>

        <CardsContainer>
          <Card><CardTitle>Titre de la location</CardTitle></Card>
          <Card><CardTitle>Titre de la location</CardTitle></Card>
          <Card><CardTitle>Titre de la location</CardTitle></Card>
          <Card><CardTitle>Titre de la location</CardTitle></Card>
          <Card><CardTitle>Titre de la location</CardTitle></Card>
          <Card><CardTitle>Titre de la location</CardTitle></Card>
        </CardsContainer>
      </Body>
    )
  }




  
  export default BannerHome