import styled from "styled-components"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
// import { useNavigate } from "react-router-dom"

// const navigate = useNavigate();

const Card = styled(Link)`
  height: 330px;
  width: 360px;
  background: rgb(97,0,0);
  background: linear-gradient(0deg, rgba(97,0,0,0.5956757703081232) 0%, rgba(239,108,108,1) 20%, rgba(239,108,108,1) 100%);
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  align-items: center;
  text-decoration: none;
  &:hover {
    box-shadow: grey 5px 5px 5px;
  }
`
const CardImg = styled.img `
  width: 95%;
  border-radius: 10px;
  background-color: ;
  height: 270px;
  margin-top: 8px;
`

const CardTitle = styled.div `
color: white;
width: 60%;
font-size: 18px;
margin-top: 15px;
margin-right: 100px;
`

function Cards ( {LocArray, id ,picture, title} ) {
    return (
        <Card to={'./pages/Location/' + id}>
            <CardImg src={picture} alt="Illustration d'une location"></CardImg>
            <CardTitle>{title}</CardTitle>
        </Card>
    )

    // if( ){
    //   return (
    //     <Card to={'./pages/Location/' + id}>
    //         <CardImg src={picture} alt="Illustration d'une location"></CardImg>
    //         <CardTitle>{title}</CardTitle>
    //     </Card>
    // )
    // }
    
    
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    
  }
  
  Card.defaultProps = {
    id: '',
    picture: '',
    title: '',
    
  }

export default Cards