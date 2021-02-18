import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div className='home'>

            <Link id='menu' to={"/menu"}>
                    <span >MENU</span>
            </Link>
        </div>
    )
}


