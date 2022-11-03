import styled from "styled-components"
import { useState } from "react"
import '../Slideshow/style.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'




const SlideImage = styled.img`
    
    width: 100%;
    height:500px;
    object-fit: cover;
    border-radius: 20px;
`

const StyledSlider = styled.div`
position: relative;
// display: block;
margin-left: auto;
margin-right: auto;
margin-top: 100px;
width: 90%;
`




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
            
            <StyledSlider>
                
                {ChevronIconLeft}
                {ChevronIconRight}
               
    
                {slides.map((slide, index) => {
                    return (
                        
                        <div key={index}>
                            
                            {index === current && (
                                <SlideImage src={slide} alt=''/>
                                
                            )}
                            
                        </div>
                
                        
                    );
                })}
                 
            </StyledSlider>
        )
    } else {

        return (
            
            <StyledSlider>
                
                {slides.map((slide, index) => {
                    return (
                        <div key={index}>
                            {index === current && (
                                <SlideImage src={slide} alt=''/>
                            )}
                        </div>
                    );
                })}
            </StyledSlider>
        )
    }
    

}

export default Slideshow