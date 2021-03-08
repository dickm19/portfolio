import React from 'react';
import { Link } from 'react-router-dom'
import './Contact.scss'
export default function Contact() {
    
    
    return(
        <>
            <Link id='menu' to={"/menu"}>
                <span style={{marginTop: 1 + 'vh', marginLeft: 1 + 'vh', color: 'black'}}>Back</span>
            </Link><br/>
            <div className='contact'>
                <div className='gooey'>
                    <a id='email' href="mailto:maryclairedick@gmail.com">Email Me</a>
                </div><br/>
                <div className='gooey'>
                    <a  id='linkedin' href='https://www.linkedin.com/in/mary-dick/'>LinkedIn </a>
                </div><br/>
                <div className='gooey'>
                    <a  id='github' href='https://github.com/dickm19'>GitHub </a>
                </div><br/>
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
        </>
    )
}