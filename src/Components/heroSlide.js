import React from 'react'

function heroSlide(props) {
    return (
        <li className="hero__slide hero__slide--selected js-slide" >
            <div className="hero__content hero__content--full-width" >
                <h2>hey there</h2>
                <img src={props.imgSrc} alt="cookie" />
                <p>Cookies are my jam</p>
                <a href="#0" className="hero__btn" >button</a>
            </div>
        </li>
    )
}

export default heroSlide
