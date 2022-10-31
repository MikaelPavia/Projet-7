import styled from "styled-components"
import LocList from '../../datas/LocationList'
import PrintBanner from "../../components/Banner"
import Cards from "../../components/Card"

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
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
      
        <Div>
          
           <PrintBanner></PrintBanner>

          {/* <PrintBanner
          picture={BanniereImg}
          alt=''
          ></PrintBanner> */}

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
          
        </Div>
      
    )
}

  export default Home