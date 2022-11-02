// import styled from "styled-components"
// import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import  '../Card/style.scss'


// import { useNavigate } from "react-router-dom"
// const navigate = useNavigate();


function Cards ( {LocArray, id ,picture, title} ) {

  return (

        <a className="cardBlock" href={"Location/" + id}>

        <img src={picture} alt="Illustration d'une location" className="cardImg"></img>

        <div className="cardTitle">{title}</div>
        
        </a>
      
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