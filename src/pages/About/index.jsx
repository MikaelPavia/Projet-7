import CollapseText from "../../components/Collapses/CollapseText"
import PrintBanner from "../../components/Banner"
// import styled from "styled-components"
import '../About/style.scss'
import bannerImgAbout  from "../../assets/banniereAbout.png"

function About() {

    return (
      
        <div className="divContainerAbout">

            <PrintBanner
           banniereImg={bannerImgAbout}></PrintBanner>
            

            <div className="divCollapsesAbout">
              
                <CollapseText title='Fiabilité' description={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}></CollapseText>
          
                <CollapseText title='Respect'  description={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}></CollapseText>
          
                <CollapseText title='Service' description={'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'}></CollapseText>
          
                <CollapseText title='Sécurité' description={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}></CollapseText>
                
            </div>
        
        </div>
    
    )

  }
  
  export default About