import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from "react-player/youtube"
import './Portfolio.scss'
export default function Portfolio(){
    return(
        <div className='portfolio'>
            <Link id='menu' to={"/menu"}>
                    <span className='back' style={{marginTop: 1 + 'vh', marginLeft: 1 + 'vh', color: 'black'}}>Back</span>
            </Link>
            <h3 id='pocket-dudes-header'>Pocket Dudes</h3>
            <a className='frontend' href='https://github.com/dickm19/pocket-dudes-frontend'>Frontend</a>
            <a className='backend' href='https://github.com/dickm19/pocket-dudes-backend'>Backend</a><br/>
            <ReactPlayer
                url="https://youtu.be/n54YuzA0Bqk"
                id='pocket-dudes-demo'
                controls={true}
                height='50vh'
                width='40vw'
                className='player'
            />
            <h3 id='haiku-header'>Haiku Twitter</h3>
            <a className='frontend' href='https://github.com/dickm19/haiku-twitter-frontend'> Frontend</a>
            <a className='backend'href='https://github.com/dickm19/haiku-twitter-api-backend'> Backend</a><br/>
            <ReactPlayer
                url="https://youtu.be/rTtrQBAWrDM"
                id='haiku-twitter-demo'
                controls={true}
                height='50vh'
                width='40vw'
                className='player'
            />
            <h3 id='movie-header'>MovieRails</h3>
            <a id='movie-rails-github' href='https://github.com/dickm19/movieRails'> GitHub</a><br/>
            <ReactPlayer
                url="https://youtu.be/jEa6omalgQc"
                id='movie-rails-demo'
                controls={true}
                height='50vh'
                width='40vw'
                className='player'
            />
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