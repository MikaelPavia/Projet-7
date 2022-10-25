import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
const ChevronIcon = <FontAwesomeIcon icon={faChevronUp}/>

const DivDescritpionEquipments = styled.div `
heigth: 200px;
width: 44%;
`
const TitleDivDescritpionEquipments = styled.div`
width: 100%;
height: 50px;
background-color: #EF6C6C;
color: white;
font-size: 20px;
border-radius: 10px;
display:flex;
justify-content: space-between;
align-items: center;
padding-right: 18px;
padding-left: 18px;

`


// const Equipments = styled.div`
// height: auto;
// width: 100%;
// font-size: 18px;
// background-color: #f2f2f2;
// border-radius: 10px;
// padding-top: 15px;
// padding-right: 20px;
// padding-left: 15px;
// padding-bottom: 50px;
// color: #EF6C6C;
// `
const Icon = styled.div`
font-size: 30px;
transform: rotate(0deg);

`
const Div = styled.div`
display: flex;
justify-content: space-between;
`
const Description = styled.div`
height: 100px;
width: 100%;
font-size: 18px;
background-color: #f2f2f2;
border-radius: 10px;
padding-top: 15px;
padding-right: 20px;
padding-left: 15px;
padding-bottom: 50px;
color: #EF6C6C;
${() =>
    .$isOpen &&
    `color: white; border-radius: 30px; background-color: #5843E4;`}

`


function CollapseText ({description}){  // passer en props le titre et la description, puis mettre contenu directement dans collapse about
    const [isOpen, setIsOpen] = useState(true)
    return ( 
        <Div> 
            <DivDescritpionEquipments>
                <TitleDivDescritpionEquipments>
                    <div>Description</div>

                    {/* <Icon onClick={() => setIsOpen(false)}>{ChevronIcon}</Icon> */}

                    <Icon onClick={() => {

                        if(isOpen === true ){
                            setIsOpen(false)
                        }else {
                            setIsOpen(true)
                        }
                    
                    }}>{ChevronIcon}</Icon>

                </TitleDivDescritpionEquipments>
                
                    <Description $isOpen>
                    {description}
                     </Description>

            </DivDescritpionEquipments>
        </Div>
    
    )
    
}






















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