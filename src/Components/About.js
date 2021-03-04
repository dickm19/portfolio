import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'
export default function About(){



    return(
        <>
        <div className='about'>
            <Link id='menu' to={"/menu"}>
                <span className='back' style={{marginTop: 1 + 'vh', marginLeft: 1 + 'vh', color: 'black'}}>Back</span>
            </Link>
            <p className='info'>
                Full-stack software engineer with experience in Ruby and JavaScript frameworks, known for curiosity and a continuous drive to broaden my technical skills. I thrive in both self-governed and collaborative environments and take pride in finding elegant solutions to complex user problems.<br/><br/>
                My passion for programming began in my high school’s robotics class where, as the only girl in the class of 16 students, I quickly picked up the skill and swiftly rose to the top of the male-dominated classroom. Although this experience was isolating at times, it was a fitting first exposure to a now-familiar circumstance as a female in tech and ultimately sparked an enthusiasm for technology that I had not previously possessed.
            </p>

            <div className='blob' id='blob1'/>
            <div className='blob' id='blob2'/>
            <div className='blob' id='blob3'/>
            <div className='blob' id='blob4'/>
            <div className='blob' id='blob5'/>
            <div className='blob' id='blob6'/>
            <div className='blob' id='blob7'/>
            <div className='blob' id='blob8'/>
            <div className='blob' id='blob9'/>
            <div className='blob' id='blob10'/>
            <p id='li1'>Ruby</p>
            <p id='li2'>Rails</p>
            <p id='li3'>JavaScript</p>
            <p id='li4'>React.js</p>
            <p id='li5'>React-Router</p>
            <p id='li6'>React-Redux</p>
            <p id='li7'>Redux-Thunk</p>
            <p id='li8'>CSS</p>
            <p id='li9'>HTML</p>
            <p id='li10'>Python</p>
            <svg>
                <defs>
                    <filter id='goo'>
                        <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='name'/>
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