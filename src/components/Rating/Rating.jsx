import '../Rating/Rating.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Colors from "../../utils/style/style"

function Rating ( {locId, rating} ) {

    const ratings = parseInt(rating)

    let stars = []

    for (let i = 0; i < 5; i++ ) {

      if (i < ratings){
        stars.push(<FontAwesomeIcon icon={faStar} color={Colors.primary} key={locId + '-rating-' + i}/>)
      }else {
        stars.push(<FontAwesomeIcon icon={faStar} color= '#D3D3D3' key={locId + '-rating-' + i}/>)
      }

    }
    
    return (

        <div className="ratings">
                      
            {stars}

        </div>
    )
}

export default Rating