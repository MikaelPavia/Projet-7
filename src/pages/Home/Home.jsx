import PrintBanner from "../../components/Banner/Banner.jsx"
import Card from "../../components/Card/Card.jsx"
import '../Home/Home.scss'
import BanniereImg from '../../assets/banniere.png'

import { DatasContext } from "../../components/Provider/Provider.jsx"
import { useContext } from "react"


function Home() {

  const { rentings, isLoaded, error } = useContext(DatasContext)

    return (

    isLoaded ? 
      
        <div className="homeContainer">
          
           <PrintBanner
           banniereImg={BanniereImg}
           text='Chez vous, partout et ailleurs'>
           </PrintBanner>

          <div className="cardsContainer">

              {rentings.map((loc) => (

                  <Card
                  key={loc.id}
                  LocArray={loc} 
                  id={loc.id}
                  picture={loc.cover}
                  title={loc.title}>
                  </Card>

            ))}

          </div>
          
        </div>: <div>Chargement...</div>
      
    )
}

  export default Home