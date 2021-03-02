import React from 'react'

function heroSlide(props) {
    return (
        <div className="hero__slide" >
            {/* <h2>hey there</h2> */}
            <img src={props.imgSrc} alt="cookie" className="hero__slide__image" />
            <p>Cookies are my jam</p>
            {/* <a href="#0" className="hero__btn" >button</a> */}
        </div>
    )
}

export default heroSlide
