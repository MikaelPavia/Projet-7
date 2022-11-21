import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import  '../Card/Card.scss'

function Cards ( {id ,picture, title} ) {

    return (
      
        <Link className="cardBlock" to={"Location/" + id}>

          <img src={picture} alt="Illustration d'une location" className="cardImg"></img>

          <div className="cardTitle">{title}</div>
      
        </Link>
    )
}

Cards.propTypes = {
id: PropTypes.string.isRequired,
picture: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,

}

Cards.defaultProps = {
id: '',
picture: '',
title: '',

}

export default Cards