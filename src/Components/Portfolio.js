import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from "react-player/youtube"
export default function Portfolio(){
    return(
        <div className='portfolio'>
        <Link id='menu' to={"/menu"}>
                <span >Back</span>
        </Link>
        <h3>Pocket Dudes</h3>
        <a href='https://github.com/dickm19/pocket-dudes-frontend'>Frontend</a><br/>
        <a href='https://github.com/dickm19/pocket-dudes-backend'>Backend</a><br/>
        <ReactPlayer
            url="https://youtu.be/n54YuzA0Bqk"
            controls={true}
            height='50vh'
            width='70vh'
            className='player'
        />
        <h3>Haiku Twitter</h3>
        <a href='https://github.com/dickm19/haiku-twitter-frontend'> Frontend</a><br/>
        <a href='https://github.com/dickm19/haiku-twitter-api-backend'> Backend</a><br/>
        <h3>MovieRails</h3>
        <a href='https://github.com/dickm19/movieRails'> GitHub</a><br/>
        </div>
    )
}