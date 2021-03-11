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
            
            <a className='frontend' href='https://github.com/dickm19/pocket-dudes-frontend 'target="_blank">Frontend</a>
            <a className='backend' href='https://github.com/dickm19/pocket-dudes-backend' target="_blank">Backend</a><br/>
            <ReactPlayer
                url="https://youtu.be/n54YuzA0Bqk"
                id='pocket-dudes-demo'
                controls={true}
                height='50vh'
                width='40vw'
                className='player'
            />
            <text className='description'>Pocket Dudes is a virtual pet-adoption app where the user can play, earn points, shop, and interact with their pet. Pocket Dudes was built on a Ruby on Rails API backend with a React and React-Redux frontend, with custom CSS styling.
            </text>
            <h3 id='haiku-header'>Haiku Twitter</h3>
            <a className='frontend' href='https://github.com/dickm19/haiku-twitter-frontend' target="_blank"> Frontend</a>
            <a className='backend'href='https://github.com/dickm19/haiku-twitter-api-backend' target="_blank"> Backend</a><br/>
            <ReactPlayer
                url="https://youtu.be/rTtrQBAWrDM"
                id='haiku-twitter-demo'
                controls={true}
                height='50vh'
                width='40vw'
                className='player'
            />
            <text className='description'>Haiku Twitter is a haiku-based personal blogging social media application for everyday poets. It was built on a Ruby on Rails API backend with a React.js frontend and custom CSS styling. It also utilizes the Syllable npm package to verify the syllable count of a given haiku line.
            </text>
            <h3 id='movie-header'>MovieRails</h3>
            <a id='movie-rails-github' href='https://github.com/dickm19/movieRails' target="_blank"> GitHub</a><br/>
            <ReactPlayer
                url="https://youtu.be/jEa6omalgQc"
                id='movie-rails-demo'
                controls={true}
                height='50vh'
                width='40vw'
                className='player'
            />
            <text className='description'>MovieRails is a film-based information application for movie enthusiasts. It was built as a stand-alone Ruby on Rails app and uses custom CSS styling.
            </text>
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