import React, { useState, useRef, useEffect } from 'react'
import HeroSlide from './heroSlide'
import BeeCookie from '../images/Cookies/bee_cookies.jpg'
import AnimalCookies from '../images/Cookies/cute_animals_cookies.jpg'
import CNYCookies from '../images/Cookies/CNY_cookies.jpg'

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0)
    const slides = new Array(BeeCookie, AnimalCookies, CNYCookies)
    const length = slides.length

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    useEffect(()=> {      
        setTimeout(nextSlide , 10000)
    },[current])

    return (
        <section className="hero"  >
            { slides.map((slide, index) => {
                return (
                        <HeroSlide imgSrc={slide} key={index} index={index} current={current} />
                )
            })}


            {/* <div className="hero__nav js-nav" >
                <nav>
                </nav>
            </div> */}
        </section>
    )
}


