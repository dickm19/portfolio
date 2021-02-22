import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

// const menuBody = styled.div `
//     background-image: linear-gradient(-200deg, rgb(218, 137, 39) 20%, #470ca7 100%);
//     background-size: cover;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     width: 100%;
//     height: 100%;
// `
export default function Menu () {
  
    return(
        <>
            <div className='menu'>
                
                <Link className='gooey' id='about' to={"/about"}>
                    <span >About</span>
                </Link><br/>
                <Link className='gooey' id='portfolio' to={"/portfolio"}>
                    <span>Portfolio</span>
                </Link><br/>

                <Link className='gooey' id='contact' to={"/contact"}>
                    <span >Contact Me</span>
                </Link>
            </div>
            <svg>
                <defs>
                    <filter id='goo'>
                    <feGaussianBlur in='SourceGraphic' 
                    stdDeviation='10' result='name'/>
                        <feColorMatrix in='name' mode='matrix'
                            values='1 0 0 0 0
                                    0 1 0 0 0 
                                    0 0 1 0 0
                                    0 0 0 30 -15 ' result='aab'/>
                        <feBlend in='SourceGraphic' in2='aab'/>
                    </filter>
                </defs>
            </svg>
        </>
    )
}