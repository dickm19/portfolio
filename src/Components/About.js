import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './About.scss'
export default function About(){

    // const [blob, setBlob] = useState(0)

    // const blobOptions = [
    //     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M55.8,-64.2C71.1,-53.7,81.4,-34.9,79.5,-18.1C77.5,-1.3,63.4,13.6,50.3,22.3C37.2,30.9,25.1,33.4,13.7,37.7C2.2,41.9,-8.7,47.9,-18.5,46.4C-28.3,44.8,-37,35.6,-47.1,24.2C-57.2,12.9,-68.8,-0.7,-69,-14.4C-69.2,-28.1,-58.1,-42.1,-44.7,-52.9C-31.3,-63.7,-15.7,-71.4,2.3,-74.1C20.3,-76.8,40.5,-74.6,55.8,-64.2Z" transform="translate(100 100)" />
    //     </svg>,
    //     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M40.7,-46.6C47.2,-34.2,43,-17.1,42.5,-0.5C42,16.1,45.1,32.2,38.7,39.1C32.2,46.1,16.1,44,-1.5,45.4C-19,46.9,-38,51.9,-51.8,45C-65.6,38,-74.2,19,-71.4,2.7C-68.7,-13.5,-54.6,-27,-40.8,-39.4C-27,-51.8,-13.5,-63,1.8,-64.8C17.1,-66.5,34.2,-58.9,40.7,-46.6Z" transform="translate(100 100)" />
    //     </svg>,
    //     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M34.6,-37.4C46.4,-31.3,58.7,-21.9,62,-9.9C65.4,2.1,59.9,16.8,50.7,26C41.5,35.2,28.5,38.9,14.9,46.1C1.2,53.4,-13,64.2,-25.3,62.7C-37.5,61.1,-47.8,47.3,-53.6,33C-59.4,18.7,-60.8,3.9,-61.5,-14.1C-62.2,-32.1,-62.3,-53.2,-51.9,-59.5C-41.5,-65.9,-20.8,-57.6,-4.7,-52C11.4,-46.4,22.7,-43.5,34.6,-37.4Z" transform="translate(100 100)" />
    //     </svg>,
    //     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M28,-36.4C39.9,-29.9,55.8,-26.6,65.4,-16.6C75.1,-6.7,78.4,9.9,75.3,26C72.2,42.1,62.6,57.6,49,67.7C35.4,77.9,17.7,82.7,5,75.8C-7.6,68.8,-15.2,50.1,-30.7,40.6C-46.2,31,-69.7,30.6,-80.4,20.7C-91.1,10.7,-89.1,-8.8,-78.3,-20.4C-67.5,-31.9,-48,-35.6,-33.5,-41.3C-19,-47.1,-9.5,-55,-0.7,-54C8,-53,16,-43,28,-36.4Z" transform="translate(100 100)" />
    //     </svg>,
    //     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M46.2,-59.8C58.7,-54.6,66.6,-39.4,66.9,-25C67.1,-10.5,59.7,3.2,54.1,16.7C48.5,30.2,44.8,43.4,36.1,53C27.4,62.5,13.7,68.5,0.3,68C-13,67.6,-26,60.7,-36,51.5C-45.9,42.3,-52.7,30.8,-57.3,18.2C-62,5.6,-64.4,-8,-63.2,-23.2C-61.9,-38.3,-56.9,-54.9,-45.8,-60.5C-34.6,-66.1,-17.3,-60.8,-0.2,-60.5C16.9,-60.2,33.8,-65,46.2,-59.8Z" transform="translate(100 100)" />
    //     </svg>

    // ]

    return(
        <>
        <div className='about'>
            <Link id='menu' to={"/menu"}>
                <span >Back</span>
            </Link>
            <h3>About</h3>
            <span className='info'>Full-stack software engineer with experience in Ruby and JavaScript frameworks, known for curiosity and a continuous drive to broaden my technical skills. I thrive in both self-governed and collaborative environments and take pride in finding elegant solutions to complex user problems.</span>
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
            <p id='li4'>React</p>
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