// import styled from "styled-components"
import LocList from '../../datas/LocationList'
import PrintBanner from "../../components/Banner"
import Card from "../../components/Card"
import '../Home/style.scss'


function Home() {

    return (
      
        <div className="homeContainer">
          
           <PrintBanner></PrintBanner>

          {/* <PrintBanner
          picture={BanniereImg}
          alt=''
          ></PrintBanner> */}

          <div className="cardsContainer">

              {LocList.map((loc) => (

                  <Card
                  key={loc.id}
                  // LocArray={LocList} 
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