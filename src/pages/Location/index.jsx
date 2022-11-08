import LocList from '../../datas/LocationList'
import { useParams } from "react-router-dom"
import Slideshow from '../../components/Slideshow'
import CollapseText from "../../components/Collapses/CollapseText"
import CollapseList from "../../components/Collapses/CollapseList"
import Owner from '../../components/Owner/index'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'

import Error404 from '../Error/index'


import './style.scss'

// import { useNavigate } from "react-router-dom"
//const navigate = useNavigate();

function FicheLogement() {

  const { id } = useParams()

  
  
  const loc = LocList.find((location) => {
    
    return location.id === id 

  })

  const ImgData = loc.pictures

  if (!loc) {
    return <Error404 />
  }

    return  (
        
        <div>

            <Slideshow slides={ImgData}></Slideshow>

            <div className="sectionInfos">

                <div className="divContainer">
              
                    <div className="title">{loc.title}</div>

                    
                    <div className="city">{loc.location}</div>
                </div>

                {/* <div className="city">{loc.location}</div> */}

                
                <div className='divOwnerRatingsTags'>

                    <div className="divContainerOwnerRatings">
                
                        <Owner
                        name={loc.host.name}
                        picture={loc.host.picture}
                        ></Owner>
                    
                
                        <Rating
                        // key={'_'}
                        // rating={loc.rating}
                        >
                        
                        </Rating>
                
                    </div>

                    <div className='divTags'>

                        <Tags
                        // key={'-'}
                        // tags={loc.tags}
                        // loc={loc}
                        >

                        </Tags>

                    </div>
                
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