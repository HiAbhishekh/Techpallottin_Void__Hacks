import React, { useState } from 'react'
import {UilArrowLeft , UilArrowRight} from '@iconscout/react-unicons' 
import { ApiSlides } from '../../apiloader/SliderApi'

import './Slider.css'

const Slider = () => {

    const[slides] = useState(ApiSlides)
    const[activeSlides, setActiveSlides] = useState(0)
    const nextSlide =()=> {
        if(activeSlides === slides.length-1){
            setActiveSlides(0)
        }
        else{
            setActiveSlides(activeSlides+1)
        }
    }

    const prevSlide = () => {
        if(activeSlides === 0){
            setActiveSlides(slides.length -1)
        }
        else{
            setActiveSlides(activeSlides-1)
        }
    }
  return (
    <div className="Slider">
        <div className="leftarrow">
            <UilArrowLeft
            onClick={prevSlide}
            />
        </div>
        {slides.map((slide, index)=>{
            if(index ===activeSlides){
                return (
                    <div className={"slidee"+ slide.background}
                    >
            <div className="slide">
                <div className="forImage">
                    <img
                    className='slide_img'
                    src={slide.src}
                    alt='slide_image'
                    />
                </div>
                <div className="des">
                    <h2 style={{fontSize: '50px',fontWeight: 'inherit'}}>{slide.content.h2}</h2>
                    <p style={{fontSize: '30px'}}>{slide.content.p}</p>
                    <button className='button btn'>Shop Now</button>
                </div>
            </div>
            
        </div>
                )
            }
        })}
        <div className="rightarrow">
            <UilArrowRight style={{fontSize: '50px'}} 
            onClick = {nextSlide}
            />
        </div>
    </div>
  )
}

export default Slider