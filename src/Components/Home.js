import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
    
    return(
        <div className='home'>

            <p className='header'>Mary Dick</p><br/>

            <Link to={"/menu"}>
                <span className='title'>Full-stack Web Developer</span>
            </Link><br/>
            <svg>
                <defs>
                    <filter id="drop-shadow">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="shadow" />
                        <feOffset in="shadow" dx="3" dy="4" result="shadow" />
                        <feColorMatrix in="shadow" type="matrix" 
                            values="0 0 0 0 0  
                            0 0 0 0 0  
                            0 0 0 0 0  
                            0 0 0 0.6 0" 
                            result="shadow" />
                        <feBlend in="SourceGraphic" in2="shadow" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}


