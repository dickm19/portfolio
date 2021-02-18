import React from 'react';
import { Link } from 'react-router-dom'

export default function Contact() {
    return(
        <div className='contact'>
            <Link id='menu' to={"/menu"}>
                <span >Back</span>
            </Link><br/>
            <a href="mailto:maryclairedick@gmail.com">Email Me</a>
            <p>Phone: (952) 303-2194</p><br/>
            <a href='https://www.linkedin.com/in/mary-dick/'>LinkedIn </a><br/>
            <a href='https://github.com/dickm19'>GitHub </a><br/>
        </div>
        
    )
}