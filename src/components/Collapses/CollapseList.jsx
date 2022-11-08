import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useParams } from "react-router-dom"
import './Collapse.scss'
const ChevronIcon = <FontAwesomeIcon icon={faChevronUp}/>




const Icon = styled.div`
font-size: 30px;
transform: rotate(180deg);
margin-right: 10px;
transition: transform 500ms;
    ${(props) =>
    props.isOpen &&
    `
    transform: rotate(0deg);`}
`



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
transition: transform 500ms;
position: relative;
z-index: -10;
    ${(props) =>
    props.isOpen &&
    `
    transform: scaleY(1)`}

`




function CollapseList ({title, list}){  // passer en props le titre et la description, puis mettre contenu directement dans collapse about
    
    const [isOpen, setIsOpen] = useState(false)
    
    const { id } = useParams()
    
    

    return ( 

        <div> 

            <div className="titleDivCollapse">

                <div className="titleIcon">

                    <div className="titleCollapse">{title}</div>

                        <Icon isOpen={isOpen} onClick={() => {

                            setIsOpen(!isOpen)

                        }}>{ChevronIcon}</Icon>

                </div>

            </div>

            <Description isOpen={isOpen}>

                <div>

                    <ul className="ulCollapse">

                        {list.map((item, index) => (

                            <li key={id + '-' + index}>{item}</li>

                        ))}

                    </ul>
                    
                </div>


            </Description>

        </div>

    )

}

export default CollapseList