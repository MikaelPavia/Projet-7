
import { useState } from "react"
import '../Slideshow/Slideshow.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Slideshow = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    
    console.log(length)
    const nextSlide = () => {
        setCurrent(current ===  length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    let ChevronIconLeft = ''
    let ChevronIconRight = ''

    if (length > 1) {
    ChevronIconLeft = <FontAwesomeIcon icon={faChevronLeft} className="leftArrow" onClick={prevSlide}/>
    ChevronIconRight = <FontAwesomeIcon icon={faChevronRight} className="rightArrow" onClick={nextSlide}/>
    }

        return (
            
            <div className="sliderStyle">
                
                {ChevronIconLeft}
                {ChevronIconRight}
               
                <div className="testcarousel">{current + 1}/{length}</div>
                
                {slides.map((slide, index) => {
                    return (
                        
                        <div key={index}>
                            
                            {index === current && (
                                <img src={slide} alt='Une pièce du logement' className="slideImg"/>
                                
                            )}
                            
                        </div>
                
                        
                    );
                })}
                 
            </div>
        )
    
    

}

export default Slideshow