import React from 'react'
import HeroSlide from './heroSlide'
import BeeCookie from '../images/Cookies/bee_cookies.jpg'
import AnimalCookies from '../images/Cookies/cute_animals_cookies.jpg'
import CNYCookies from '../images/Cookies/CNY_cookies.jpg'

export default function HeroCarousel() {
    return (
        <section className="hero js-hero js-autoplay" >
            <ul className="hero__slider" >
                <HeroSlide imgSrc={BeeCookie} />
                <HeroSlide imgSrc={AnimalCookies} />
                <HeroSlide imgSrc={CNYCookies} />
            </ul>
            <div className="hero__nav js-nav" >
                <nav>
                    <span className="hero_marker hero__marker--item-1 js-marker" ></span>
                    <ul >
                        <li className="selected" ><a href="#0" >Intro</a></li>
                        <li ><a >Option 1</a></li>
                        <li ><a >Option 2</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}


