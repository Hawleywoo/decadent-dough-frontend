import React, { useState } from 'react'
import HeroSlide from './heroSlide'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import BeeCookie from '../images/Cookies/bee_cookies.jpg'
import AnimalCookies from '../images/Cookies/cute_animals_cookies.jpg'
import CNYCookies from '../images/Cookies/CNY_cookies.jpg'

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0)
    const slides = new Array(BeeCookie, AnimalCookies, CNYCookies)
    const length = slides.length

    const prevSlide = () => {
        return
    }

    return (
        <section className="hero" >
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide} />
            <HeroSlide imgSrc={BeeCookie} />
            <HeroSlide imgSrc={AnimalCookies} />
            <HeroSlide imgSrc={CNYCookies} />


            {/* <div className="hero__nav js-nav" >
                <nav>
                </nav>
            </div> */}
        </section>
    )
}


