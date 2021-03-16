import React, { useState } from 'react'
import logo from '../images/DD_new_logo.jpg'

export default function Header (){
    const [ toggle, setToggle ] = useState(false)

    const handleScroll = (event) => {
        console.log(event.target)
        console.log(event.target.detail)
        setToggle(true)
        
    }

    return(
        <div className="header__parent" onScroll={handleScroll} >
            <header className="header" >
                <img src={logo} alt="Decadent Dough" className="head-logo"/>
            </header>
        </div>
        
    )
}