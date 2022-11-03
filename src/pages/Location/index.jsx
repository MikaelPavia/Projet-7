// import styled from "styled-components"
import LocList from '../../datas/LocationList'
import { useParams } from "react-router-dom"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faStar } from '@fortawesome/free-solid-svg-icons'
import Slideshow from '../../components/Slideshow'
import CollapseText from "../../components/Collapses/CollapseText"
import CollapseList from "../../components/Collapses/CollapseList"
import Owner from '../../components/Owner/index'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
// import Colors from "../../utils/style/style"


import './style.scss'

// const FullStarIcon = <FontAwesomeIcon icon={faStar} color={Colors.primary}/>

// const EmptyStarIcon = <FontAwesomeIcon icon={faStar} color= '#D3D3D3'/>



function FicheLogement() {

  const { id } = useParams()
  
  const loc = LocList.find((location) => {
    
    return id === location.id

  })

  // const rating = parseInt(loc.rating) 

  

  //   for (let i = 0; i < 5; i++ ) {

  //     if (i < rating){
  //       stars.push(FullStarIcon)
  //     }else {
  //       stars.push(EmptyStarIcon)
  //     }

  //   }
  
  const ImgData = loc.pictures
    return  (
      
        <div>

            {/* <img src={loc.cover} alt='' className="bannerLocation"></img> */}
            <Slideshow slides={ImgData}></Slideshow>

            <div className="sectionInfos">

                <div className="divContainer">
              
                    <div className="title">{loc.title}</div>

                    <Owner
                    name={loc.host.name}
                    picture={loc.host.picture}
                    ></Owner>
              
                </div>

                <div className="city">{loc.location}</div>

                <div className="divContainer">
                
                    <Tags
                    // key={'-'}
                    // tags={loc.tags}
                    // loc={loc}
                    >

                    </Tags>
                
                    <Rating
                    // key={'_'}
                    // rating={loc.rating}
                    >
                      
                    </Rating>
                
                </div>
              
            </div>

            <div className="sectionCollapses">

                <div className="divCollapses">

                    <div className="containerCollapse">

                        <CollapseText
                          title= "Description"
                          description={loc.description}>
                        </CollapseText>

                    </div>

                    <div className="containerCollapse">

                        <CollapseList 
                        title='Équipements'
                        list= {loc.equipments}
                        ></CollapseList>

                    </div>

                </div>

            </div>

        </div>
)

}
  
  export default FicheLogement