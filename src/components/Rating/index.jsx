import '../Rating/style.scss'


import LocList from '../../datas/LocationList'
import { useParams } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Colors from "../../utils/style/style"

const FullStarIcon = <FontAwesomeIcon icon={faStar} color={Colors.primary}/>

const EmptyStarIcon = <FontAwesomeIcon icon={faStar} color= '#D3D3D3'/>



function Rating (rating) {

    const { id } = useParams()

    const loc = LocList.find((location) => {
        
        return id === location.id
    
      })


    const ratings = parseInt(loc.rating)


    let stars = []

    for (let i = 0; i < 5; i++ ) {

      if (i < ratings){
        stars.push(FullStarIcon)
      }else {
        stars.push(EmptyStarIcon)
      }

    }
    return (

        <div className="ratings">
                      
            {stars}

        </div>
    )
}

export default Rating