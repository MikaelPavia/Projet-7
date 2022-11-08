import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import PropTypes from 'prop-types'
import '../Collapses/Collapse.scss'

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
// height: auto;

width: 100%;
font-size: 21px;
background-color: #f2f2f2;
border-radius: 10px;
margin-top: -25px;
color: #EF6C6C;
transform-origin: 50% top;
transform: scaleY(0);
transition: transform 300ms;
z-index: -10;
position: relative;
opacity: 0.5;
    ${(props) =>
    props.isOpen &&
    `
    transform: scaleY(1);
    opacity: 1;
    margin-top: -30px;`}
`


const CollapseContainer = styled.div`
height: 80px;
transition: 500ms;
width: 100%;
    ${(props) =>
    props.isOpen &&
    `
    height: auto;
    `}
`


function CollapseText ({title, description}){  // passer en props le titre et la description, puis mettre contenu directement dans collapse about
    
    const [isOpen, setIsOpen] = useState(false)
    
    return ( 

        <CollapseContainer isOpen={isOpen}> 

            <div className="titleDivCollapse">

                <div className="titleIcon">

                    <div className="titleCollapse">{title}</div>

                    <Icon isOpen={isOpen} onClick={() => {

                        setIsOpen(!isOpen)

                    }}>{ChevronIcon}</Icon>

                </div>

            </div>

            <Description isOpen={isOpen}>

                <p className="collapseText">{description}</p>

            </Description>

        </CollapseContainer>

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

export default CollapseText