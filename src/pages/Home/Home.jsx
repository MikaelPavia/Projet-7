// import styled from "styled-components"
import LocList from '../../datas/LocationList'
import PrintBanner from "../../components/Banner/Banner.jsx"
import Card from "../../components/Card/Card.jsx"
import '../Home/Home.scss'
import BanniereImg from '../../assets/banniere.png'


function Home() {

    return (
      
        <div className="homeContainer">
          
           <PrintBanner
           banniereImg={BanniereImg}
           text='Chez vous, partout et ailleurs'></PrintBanner>

          {/* <PrintBanner
          picture={BanniereImg}
          alt=''
          ></PrintBanner> */}

          <div className="cardsContainer">

              {LocList.map((loc) => (

                  <Card
                  key={loc.id}
                  LocArray={loc} 
                  id={loc.id}
                  picture={loc.cover}
                  title={loc.title}>
                  </Card>

            ))}

          </div>
          
        </div>
      
    )
}

  export default Home