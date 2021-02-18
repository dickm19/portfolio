import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
    return(
        <div className='about'>
            <Link id='menu' to={"/menu"}>
                <span >Back</span>
            </Link>
            <h3>About</h3>
            <p>Full-stack software engineer with experience in Ruby and JavaScript frameworks, known for curiosity and a continuous drive to broaden my technical skills. I thrive in both self-governed and collaborative environments and take pride in finding elegant solutions to complex user problems.
            </p>
           
            <h3>Skills</h3>
        <ul>
            <li>Ruby</li>
            <li>Rails</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>React-Router</li>
            <li>React-Redux</li>
            <li>Redux-Thunk</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Python</li>
        </ul>
            
        </div>

    )
}