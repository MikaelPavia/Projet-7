// import styled from "styled-components"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import  '../Card/Card.scss'


// import { useNavigate } from "react-router-dom"



function Cards ( {LocArray, id ,picture, title} ) {

  // const navigate = useNavigate();

  console.log(LocArray.id)

//  const  az = true


  

    return (

      // <a className="cardBlock" href={"Location/" + id}>

      // <div className="cardBlock" onClick={ ()=> navigate("Location/" + id)}>
      
        <Link className="cardBlock" to={"Location/" + id}>

          <img src={picture} alt="Illustration d'une location" className="cardImg"></img>

          <div className="cardTitle">{title}</div>
      
          </Link>
        
      // </div>
      
    
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