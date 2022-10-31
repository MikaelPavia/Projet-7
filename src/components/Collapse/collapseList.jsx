import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import LocList from '../../datas/LocationList'
import { useParams } from "react-router-dom"

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
// border: 3px solid blue;
// `

const Description = styled.div`
height: auto;
width: 100%;
font-size: 18px;
background-color: #f2f2f2;
border-radius: 10px;
margin-top: -30px;
color: #EF6C6C;
transform-origin: 50% top;
transform: scaleY(0);
transition: transform 100ms;
position: sticky;
z-index: -10;
    ${(props) =>
    props.isOpen &&
    `
    transform: scaleY(1)`}

`
const Ul = styled.ul`
list-style: none;
line-height: 1.5;
padding: 30px 15px 30px 10px;
font-size: 21px;
`
// const Text = styled.p`
// color: red;
// margin: 20px 15px 20px 15px;
// `



function CollapseList ({title}){  // passer en props le titre et la description, puis mettre contenu directement dans collapse about
    
    const [isOpen, setIsOpen] = useState(false)
    
    const { id } = useParams()
    
    const loc = LocList.find((location) => {
    
        return id === location.id
    })

    return ( 

        <div> 

            <TitleDivDescritpionEquipments>

                <TitleIcon>

                    <Title>{title}</Title>

                        <Icon isOpen={isOpen} onClick={() => {

                            if(isOpen === true ){

                                setIsOpen(false)

                            }else {

                                setIsOpen(true)
                            }

                        }}>{ChevronIcon}</Icon>

                </TitleIcon>

            </TitleDivDescritpionEquipments>

            <Description isOpen={isOpen}>

                <div>

                    <Ul>

                        {loc.equipments.map((equipment, index) => (

                            <li key={loc + index}>{equipment}</li>

                        ))}

                    </Ul>
                    
                </div>


            </Description>

        </div>

    )

}

export default CollapseList