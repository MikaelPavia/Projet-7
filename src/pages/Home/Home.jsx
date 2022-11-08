
// import {useState, useEffect} from 'react';

import PrintBanner from "../../components/Banner/Banner.jsx"
import Card from "../../components/Card/Card.jsx"
import '../Home/Home.scss'
import BanniereImg from '../../assets/banniere.png'

import RentingsList from "../../datas/LocationList.json"

function Home() {
  
// console.log(RentingsList)
//   const [rentings, setRentings] = useState([]); 

//   useEffect(() => {

//     fetch(RentingsList)

//     .then((response) => {
//       console.log(response.type)
//       return response.json()
//     })
//     .then((data) => {
//       console.log(data)
//       setRentings(data)
//     })
//   }, []) 

    return (
      
        <div className="homeContainer">
          
           <PrintBanner
           banniereImg={BanniereImg}
           text='Chez vous, partout et ailleurs'>
           </PrintBanner>

          <div className="cardsContainer">

              {RentingsList.map((loc) => (

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