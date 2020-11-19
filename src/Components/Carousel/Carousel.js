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
    const [img, setImg] = useState(imgArray[0])
    const nextSlide = () => {
        if (img === imgArray[3]) {
            setImg(imgArray[0])
        } else if (img === imgArray[2]) {
            setImg(imgArray[3])
        } else if (img === imgArray[1]) {
            setImg(imgArray[2])
        } else if (img === imgArray[0]) {
            setImg(imgArray[1])
        }
    }
    const prevSlide = () => {
        if (img === imgArray[0]) {
            setImg(imgArray[3])
        } else if (img === imgArray[2]) {
            setImg(imgArray[1])
        } else if (img === imgArray[3]) {
            setImg(imgArray[2])
        } else if (img === imgArray[1]) {
            setImg(imgArray[0])
        }
    }


    return (
        <>
            <div className={'sliderComponent'}>
                <img src={img} alt="Slider" />
            </div>
            <div className={'buttonPosition'}>
                <button className={'button'} onClick={prevSlide}>prev</button>
                <button className={'button'} onClick={nextSlide}>next</button>
            </div>
        </>

    )
}
