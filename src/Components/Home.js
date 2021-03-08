import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
    
    return(
        <div className='home'>

            <p className='header'>Mary Dick</p><br/>

            <Link to={"/menu"}>
                <span className='title'>Full-stack Web Developer</span>
            </Link>
        </div>
    )
}


