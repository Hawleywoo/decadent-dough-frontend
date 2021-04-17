import React from 'react'
import Logo from '../images/Decadent_Dough_trans.jpg'

function Footer() {
    return (
        <div className="footer">
            <img className="footer__logo" src={Logo} alt="Decadent Dough Logo" />
            <p>© some copyright bullshit</p>
        </div>
    )
}

export default Footer

