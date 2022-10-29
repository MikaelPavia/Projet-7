import CollapseText from "../../components/Collapse/collapseText"
import PrintBanner from "../../components/Banner"
import styled from "styled-components"


const Div = styled.div`
height: auto;
margin-top: 70px;`

const DivInfos = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
width: 90%;
`


const DivCollapses = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
margin-top: 100px;
width: 80%;
margin-left: auto;
margin-right: auto;
`


// const DivCollapse= styled.div`
// display: block;
// margin-left: auto;
// margin-right: auto;
// width: 75%;
// margin-top: 20px;
// `



function APropos() {
    return (
      
      <Div>

      <DivInfos><PrintBanner></PrintBanner></DivInfos>
      <DivCollapses><CollapseText title='Fiabilité' description={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}></CollapseText>
      <CollapseText title='Respect'  description={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}></CollapseText>
      <CollapseText title='Service' description={'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'}></CollapseText>
      <CollapseText title='Sécurité' description={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}></CollapseText></DivCollapses>
      </Div>
    
    )

  }
  
  export default APropos