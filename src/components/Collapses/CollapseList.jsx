import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useParams } from "react-router-dom"
import './Collapse.scss'
const ChevronIcon = <FontAwesomeIcon icon={faChevronUp}/>


function CollapseList ({title, list}){  
    
    const [isOpen, setIsOpen] = useState(true)
    
    const { id } = useParams()
    
    

    return ( 

        <div> 

            <div className="titleDivCollapse">

                <div className="titleIcon">

                    <div className="titleCollapse">{title}</div>

                        <div isOpen={isOpen} onClick={() => {

                            setIsOpen(!isOpen)

                        }} className={ isOpen ? 'IconCollapse' : 'IconCollapse IconCollapseOpened'}>{ChevronIcon}</div>

                </div>

            </div>

            <div isOpen={isOpen}>

                <div className={isOpen ? 'DescriptionCollapse' : 'DescriptionCollapse DescriptionCollapseOpened'}>

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

export default CollapseList