import React from 'react'

export default function Header (){
    return(
        <div>
            <header className="header" >
                <h1>Decadent Dough</h1>

                <nav className="navigation">
                    <a>Order Form</a>
                    <a>Previous Work</a>
                    <a>About Us!</a>
                </nav>
            </header>
        </div>
    )
}