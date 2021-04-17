import React from 'react'
import BeeCookie from '../images/Cookies/bee_cookies.jpg'
import CuteAnimalCookies from '../images/Cookies/cute_animals_cookies.jpg'

function priceSheet() {
    return (
        <div className="price-sheet">
            <h2>Pricing Sheet</h2>
            <hr className="hr__order-price-sheet" />
            <p className="option-description" >Costs are based on the intricacies and level of detail.  Costs will vary with design below are base starting prices.</p>
            <div className="price-sheet__main-container">
                <div className="price-sheet__cookie-container">
                    <img src={CuteAnimalCookies} alt="Basic cookie  design" className="price-sheet__main-container--images" />
                    <div className="price-sheet__desc-container">
                        <h3>Basic Design:</h3>

                        <p>Starting at $45</p>
                        <p>Up to 3 shapes/designs.  1 to 3 colors + white</p>
                    </div>
                </div>
                <div className="price-sheet__cookie-container">
                    <img className="price-sheet__main-container--images" src={BeeCookie} alt="Detailed Bumble Bee Cookies" />
                    <div className="price-sheet__desc-container">
                        <h3>Complex Design:</h3>
                        <p>Starting at $55</p>
                        <p>Up to 6 shapes/designs.  2 to 4 colors + white</p>
                    </div>
                </div>
            </div>
            <div className="price-sheet-packaging">
                <h3>Packaging:</h3>
                <p>Standard individually sealed in pastry box.<br />
                    Party Favors additional $6 per dozen.<br />
                    Custom box $10 per box
                </p>
            </div>
        </div>
    )
}

export default priceSheet
