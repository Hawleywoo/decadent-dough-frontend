import React, { useState,  useEffect } from 'react'
import HeroSlide from './heroSlide'
import ForrestBabyCookies from '../images/Cookies/Forrest_Baby_Cookies.jpg'
import TeddyBearCookies from '../images/Cookies/Teddy_Bear_Baby_Cookies.jpg'
import PinkBabyCookies from '../images/Cookies/Pink_Baby_Cookies.jpg'

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0)
    const slides = [ForrestBabyCookies, TeddyBearCookies, PinkBabyCookies]
    const length = slides.length

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    useEffect(()=> {      
        let sliderTimer = setTimeout(nextSlide , 3000)
        return function cleanUp(){
            clearTimeout(sliderTimer)
        }

    })

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


