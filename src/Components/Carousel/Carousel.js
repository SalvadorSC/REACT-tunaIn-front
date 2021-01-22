import React, { useState } from 'react'
import './Carousel.css';
/* import SliderContent from './SliderContent' */


export const Carousel = () => {

    const imgArray = [
        "https://via.placeholder.com/1903x678/141414/fff?text=1",
        "https://via.placeholder.com/1903x678/141414/fff?text=2",
        "https://via.placeholder.com/1903x678/141414/fff?text=3",
        "https://via.placeholder.com/1903x678/141414/fff?text=4",
    ]
    let [img, setImg] = useState(0)

    
    const nextSlide = () => {
        if (img < imgArray.length - 1) {
            setImg(img + 1)
        }
        else (setImg(0))
    }
    const prevSlide = () => {
        if (img <= 0) {
            setImg(3)
        }
        else (setImg(img - 1))
    }


    return (
        <>
            <div className={'sliderComponent'}>
                <img src={imgArray[img]} alt="Slider" />
            </div>
            <div className={'buttonPosition'}>
                <button className={'button'} onClick={prevSlide}><i class="fas fa-arrow-left"></i></button>
                <button className={'button'} onClick={nextSlide}><i class="fas fa-arrow-right"></i></button>
            </div>
        </>

    )
}
