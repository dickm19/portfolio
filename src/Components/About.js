import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'
export default function About(){

    const renderBlob = (num) => {
        return (
        <div className={`blob${num}`}>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
            </svg>
        </div>
        )
    }
    return(
        <>
        <div className='about'>
            <Link id='menu' to={"/menu"}>
                <span >Back</span>
            </Link>
            <h3>About</h3>
            <p>Full-stack software engineer with experience in Ruby and JavaScript frameworks, known for curiosity and a continuous drive to broaden my technical skills. I thrive in both self-governed and collaborative environments and take pride in finding elegant solutions to complex user problems.
            </p>
            {renderBlob(1)}
            {renderBlob(2)}
            {renderBlob(3)}
            {renderBlob(4)}
            {renderBlob(5)}
            {renderBlob(6)}
            {renderBlob(7)}
            {renderBlob(8)}
            {renderBlob(9)}
            {renderBlob(10)}
            <h3>Skills</h3>
            <ul>
                <li className='li1'>Ruby</li>
                <li className='li2'>Rails</li>
                <li className='li3'>JavaScript</li>
                <li className='li4'>React</li>
                <li className='li5'>React-Router</li>
                <li className='li6'>React-Redux</li>
                <li className='li7'>Redux-Thunk</li>
                <li className='li8'>CSS</li>
                <li className='li9'>HTML</li>
                <li className='li10'>Python</li>
            </ul>
            
        </div>
        </>
    )
}