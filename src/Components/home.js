import React from 'react'
import FloralBabyCookies from '../images/Cookies/floral_baby_cookies.jpg'
import GreenLingerieCookies from '../images/Cookies/green_lingerie_cookies.jpg'
import CNYCookies from '../images/Cookies/CNY_cookies.jpg'

export default function Home(props) {
    return (
        <div className="body-section">
            <div className="body-section__image-section">
                <div className="image-container" >
                    <img className="section-image" src={GreenLingerieCookies} alt="images or something" />
                    <h2 className="cookie-title" >Custom Lingerie</h2>
                </div>
                <div className="image-container" >
                    <img className="section-image" src={CNYCookies} alt="images or something" />
                    <h2 className="cookie-title" >Chinese New Year</h2>
                </div>
                <div className="image-container">
                    <img className="section-image" src={FloralBabyCookies} alt="images or something" />
                    <h2 className="cookie-title" >Elaborate Baby Shower With Floral</h2>
                </div>
            </div>
            <div className="body-section__description">
                <h2>Header</h2>
                <p> some stuff about this cookie shniz</p>
            </div>
        </div>
    )
}