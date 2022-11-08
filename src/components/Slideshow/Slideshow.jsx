
import { useState } from "react"
import '../Slideshow/Slideshow.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Slideshow = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current ===  length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    
    const ChevronIconLeft = <FontAwesomeIcon icon={faChevronLeft} className="leftArrow" onClick={prevSlide}/>
    const ChevronIconRight = <FontAwesomeIcon icon={faChevronRight} className="rightArrow" onClick={nextSlide}/>

    if (length > 1) {
        return (
            
            <div className="sliderStyle">
                
                {ChevronIconLeft}
                {ChevronIconRight}
               
    
                {slides.map((slide, index) => {
                    return (
                        
                        <div key={index}>
                            
                            {index === current && (
                                <img src={slide} alt='' className="slideImg"/>
                                
                            )}
                            
                        </div>
                
                        
                    );
                })}
                 
            </div>
        )
    } else {

        return (
            
            <div className="sliderStyle">
                
                {slides.map((slide, index) => {
                    return (
                        <div key={index}>
                            {index === current && (
                                <img src={slide} alt='' className="slideImg"/>
                            )}
                        </div>
                    );
                })}
            </div>
        )
    }
    

}

export default Slideshow