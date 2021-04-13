import React, { useState, useRef, useLayoutEffect } from 'react'
import logo from '../images/Decadent_Dough_trans.jpg'

export default function Header (){
    const [ toggle, setToggle ] = useState(true)
    const headerRef = useRef()

    useLayoutEffect(()=>{
        const topPosition = element => headerRef.current.getBoundingClientRect().top

        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight
            console.log(scrollPosition, 'scroll position')
            console.log(window.innerHeight, 'inner')
            console.log(window.scrollY, 'sroll Y')
            
            const elPosition = topPosition(headerRef.current)
            
            console.log(elPosition, 'element Y')
            if(window.scrollY > elPosition){
                setToggle(false)
            } else if(window.scrollY < window.innerHeight){
                setToggle(true)
            }

        }
        
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll) 
    }, [])



    return(
        <div className="header__parent" >
            <header ref={headerRef} className={`header ${toggle ? '' : `header__scrolled`}`}>
                <img src={logo} alt="Decadent Dough" className="head-logo"/>
            </header>
        </div>
        
    )
}