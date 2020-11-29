import React from 'react'
import logo from '../images/Logo2.jpg'

export default function Header (){
    return(
        <div>
            <header className="header" >
                <img src={logo} alt="Decadent Dough" className="head-logo"/>
            </header>
        </div>
    )
}