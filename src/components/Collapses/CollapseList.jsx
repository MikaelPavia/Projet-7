import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useParams } from "react-router-dom"
import PropTypes from 'prop-types'
import './Collapse.scss'
const ChevronIcon = <FontAwesomeIcon icon={faChevronUp}/>


function CollapseList ({title, list}){  
    
    const [isOpen, setIsOpen] = useState(false)
    
    const { id } = useParams()
    
    

    return ( 

        <div> 

            <div className="titleDivCollapse">

                <div className="titleIcon">

                    <div className="titleCollapse">{title}</div>

                        <div onClick={() => {

                            setIsOpen(!isOpen)

                        }} className={ isOpen ? 'IconCollapse IconCollapseOpened' : 'IconCollapse'}>{ChevronIcon}</div>

                </div>

            </div>

            <div>

                <div className={isOpen ? 'DescriptionCollapse DescriptionCollapseOpened' : 'DescriptionCollapse'}>

                    <ul className="ulCollapse">

                        {list.map((item, index) => (

                            <li key={id + '-' + index}>{item}</li>

                        ))}

                    </ul>
                    
                </div>


            </div>

        </div>

    )

}

CollapseList.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
    }
    
CollapseList.defaultProps = {
    title: '',
    list: ''
    }

export default CollapseList