import '../Rating/Rating.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Colors from "../../utils/style/style"
import PropTypes from 'prop-types'



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


Rating.propTypes = {
  locId: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
  
  }
  
  Rating.defaultProps = {
  locId: '',
  rating: '',
  
  }
  
export default Rating