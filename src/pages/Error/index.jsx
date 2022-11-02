// import styled from "styled-components"
// import { Link } from "react-router-dom"
import '../Error/style.scss'



function Error() {
 
    return (
      
      <div className="errorContainer">

        <div className='errorCode'>404</div>

        <div className="errorSentence">Oups ! La page que vous demandez n'existe pas.</div>

        <a href='/' className="homeLink">Retourner sur la page d'accueil</a>
        
      </div>
      
    )
  }
  
  export default Error