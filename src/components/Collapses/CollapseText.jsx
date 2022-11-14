import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import PropTypes from 'prop-types'
import '../Collapses/Collapse.scss'

const ChevronIcon = <FontAwesomeIcon icon={faChevronUp}/>



function CollapseText ({title, description}){  
    
    const [isOpen, setIsOpen] = useState(true)
    
    return ( 

        <div className={isOpen ? 'CollapseContainer': 'CollapseContainer CollapseContainerOpened'}> 

            <div className="titleDivCollapse">

                <div className="titleIcon">

                    <div className="titleCollapse">{title}</div>

                    <div onClick={() => {

                        setIsOpen(!isOpen)

                    }} className={ isOpen ? 'IconCollapse' : 'IconCollapse IconCollapseOpened'}>{ChevronIcon}</div>

                </div>

            </div>

            <div className={isOpen ? 'DescriptionCollapse' : 'DescriptionCollapse DescriptionCollapseOpened'}>

                <p className="collapseText">{description}</p>

            </div>

        </div>

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