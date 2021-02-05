import React, { useState } from 'react'
import './Carousel.css';
/* import SliderContent from './SliderContent' */


export const Carousel = () => {

    const imgArray = [
        "https://images.unsplash.com/photo-1482442120256-9c03866de390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1603502142164-9e3e61b01e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80",
        "https://images.unsplash.com/photo-1534327737286-52d27a912124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
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
