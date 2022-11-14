import {useState, useEffect, createContext} from 'react';

import RentingsList from "../../datas/LocationList.json"

export const DatasContext = createContext()

function DatasLocProvider({ children }) {


  
  async function getDatas() {

    
      return (RentingsList)

      //Ici qu'on pourrait mettre le fetch

  }


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [rentings, setRentings] = useState([]); 

    useEffect(() => {

      setTimeout(() => {
        getDatas()
        .then(
          (datas) => {
            setRentings(datas)
            setIsLoaded(true)
          }
        )
        .catch(
          (err) => {
            setError(err)
            setIsLoaded(true)
          }
        )
      }, 5000)
      

      
        
    }, [])

    return(
      <DatasContext.Provider value={{rentings, isLoaded, error}}>
        {children}
      </DatasContext.Provider>
    )

    
}
  

export default DatasLocProvider