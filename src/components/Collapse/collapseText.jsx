import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import PropTypes from 'prop-types'
const ChevronIcon = <FontAwesomeIcon icon={faChevronUp}/>
  

const TitleDivDescritpionEquipments = styled.div`
width: 100%;
height: 50px;
background-color: #EF6C6C;
color: white;
font-size: 21px;
border-radius: 10px;
display: flex;
align-items: center;
z-index: 10;
`

const Icon = styled.div`
font-size: 30px;
transform: rotate(0deg);
margin-right: 10px;
transition: transform 500ms;
${(props) =>
    props.isOpen &&
    `
    transform: rotate(180deg);`}
`
const Title = styled.div`
margin-left: 10px;
`
const TitleIcon = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
align-items: center;
`
// const Div = styled.div`
// width: 45%;
// display: flex;
// flex-direction: column;
// justify-content: start;
// border: 3px solid red;
// `



const Description = styled.div`
// height: auto;
width: 100%;
font-size: 21px;
background-color: #f2f2f2;
border-radius: 10px;
margin-top: -30px;
color: #EF6C6C;
transform-origin: 50% top;
transform: scaleY(0);
transition: transform 150ms;
z-index: -10;
position: sticky;
${(props) =>
    props.isOpen &&
    `
    transform: scaleY(1)`}

`

const Text = styled.p`
padding: 25px 15px 60px 15px;
`





const Tout = styled.div`
height: 80px;
transition:500ms;
${(props) =>
    props.isOpen &&
    `
    height: auto;
    `}
`


function CollapseText ({title, description}){  // passer en props le titre et la description, puis mettre contenu directement dans collapse about
    const [isOpen, setIsOpen] = useState(false)
    return ( 

        <Tout isOpen={isOpen}> 

                <TitleDivDescritpionEquipments>
                    <TitleIcon>
                    <Title>{title}</Title>

                    <Icon isOpen={isOpen}
                    onClick={() => {

                        if(isOpen === true ){
                            setIsOpen(false)
                        }else {
                            setIsOpen(true)
                        }
                    
                    }}>{ChevronIcon}</Icon>
</TitleIcon>
                </TitleDivDescritpionEquipments>
                
                    <Description isOpen={isOpen}>
                        <Text>{description}</Text>
                    
                    </Description>
            
        </Tout>
    
    )
    
}

CollapseText.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }
  
CollapseText.defaultProps = {
    title: '',
    description: ''
  }

















// function CollapseText ({description}){  // passer en props le titre et la description, puis mettre contenu directement dans collapse about
//     const [isOpen, setIsOpen] = useState(true)
//     return isOpen ? ( 
//         <Div> 
//             <DivDescritpionEquipments>
//                 <TitleDivDescritpionEquipments>
//                     <div>Description</div>

//                     {/* <Icon onClick={() => setIsOpen(false)}>{ChevronIcon}</Icon> */}

//                     <Icon onClick={() => {

//                         if(isOpen === true ){
//                             setIsOpen(false)
//                             console.log(false)
//                         }else {
//                             setIsOpen(true)
//                             console.log(true)
//                         }
                    
//                     }}>{ChevronIcon}</Icon>

//                 </TitleDivDescritpionEquipments>
//             <DescriptionOpen>{description}</DescriptionOpen>
//             </DivDescritpionEquipments>
//         </Div>
    
//     ):(
//         <Div> 
//             <DivDescritpionEquipments>
//                 <TitleDivDescritpionEquipments>
//                     <div>Description</div>

//                     {/* <Icon onClick={() => setIsOpen(false)}>{ChevronIcon}</Icon> */}

//                     <Icon onClick={() => {

//                         if(isOpen === true ){
//                             setIsOpen(false)
//                             console.log(false)
//                         }else {
//                             setIsOpen(true)
//                             console.log(true)
//                         }
                    
//                     }}>{ChevronIcon}</Icon>

//                 </TitleDivDescritpionEquipments>
//                 <DescriptionClose>{description}</DescriptionClose>
            
//             </DivDescritpionEquipments>
//         </Div>
//     )
    
// }














// function CollapseText ({description}){  // passer en props le titre et la description, puis mettre contenu directement dans collapse about
//     const [isOpen, setIsOpen] = useState(true)
//     return isOpen ?( 
//         <Div> 
//             <DivDescritpionEquipments>
//                 <TitleDivDescritpionEquipments>
//                     <div>Description</div>
//                     <Icon onClick={() => setIsOpen(false)}>{ChevronIcon}</Icon>
//                 </TitleDivDescritpionEquipments>
                
//                     <Description>
//                     {description}
//                      </Description>
                
                
//             </DivDescritpionEquipments>
                    
//             <DivDescritpionEquipments>
//                 <TitleDivDescritpionEquipments>
//                     <div>Equipements</div>
//                     <Icon onClick={() => setIsOpen(false)}>{ChevronIcon}</Icon>
//                 </TitleDivDescritpionEquipments>
//                 <Equipments>

//                 </Equipments>
//             </DivDescritpionEquipments>
//         </Div>
//     ):(
//         <Div>
//             <DivDescritpionEquipments>
//             <TitleDivDescritpionEquipments>
//                     <div>Description</div>
//                     <Icon onClick={() => setIsOpen(true)}>{ChevronIcon}</Icon>
//                 </TitleDivDescritpionEquipments>
//             </DivDescritpionEquipments>

//             <DivDescritpionEquipments>
//                 <TitleDivDescritpionEquipments>
//                     <div>Equipements</div>
//                     <Icon onClick={() => setIsOpen(true)}>{ChevronIcon}</Icon>
//                 </TitleDivDescritpionEquipments>
                
//             </DivDescritpionEquipments>

//         </Div>
//     )
        
    
    
// }
export default CollapseText