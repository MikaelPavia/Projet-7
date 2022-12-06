import PrintBanner from "../../components/Banner/Banner.jsx"
import Card from "../../components/Card/Card.jsx"
import '../Home/Home.scss'
import BanniereImg from '../../assets/banniere.png'
import Loader from "../../components/Loader/Loader.jsx"
import { DatasContext } from "../../components/Provider/Provider.jsx"
import { useContext } from "react"


function Home() {

  const { rentings, isLoaded, error } = useContext(DatasContext)

    return (
      
      isLoaded ? 

        error ? 
      
          <div>{error}Erreur</div>:

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
            
          </div>: <Loader></Loader>
      
    )
}

  export default Home