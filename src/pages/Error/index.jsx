import styled from "styled-components"
import { Link } from "react-router-dom"

const ErrorDiv = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`
const ErrorCode = styled.div`
font-size: 17rem;
color: #EF6C6C;
font-weight: bold;

`
const ErrorSentence = styled.div`
color: #EF6C6C;
font-size: 2rem;
margin-top: 50px;
`

const HomeLink = styled(Link)`
color: #EF6C6C;
font-size: 1.5rem;
margin-top: 150px;
`
function Error() {
    return (
      <ErrorDiv>
        <ErrorCode>404</ErrorCode>
        <ErrorSentence>Oups ! La page que vous demandez n'existe pas.</ErrorSentence>
        <HomeLink to=''>Retourner sur la page d'accueil</HomeLink>
      </ErrorDiv>
    )
  }
  
  export default Error