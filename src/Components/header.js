import React from 'react'
import logo from '../images/DD_new_logo.jpg'

export default function Header (){
    return(
        <div>
            <header className="header" >
                <img src={logo} alt="Decadent Dough" className="head-logo"/>
            </header>
        </div>
    )
}