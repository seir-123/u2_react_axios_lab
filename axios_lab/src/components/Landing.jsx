import axios from 'axios'
import { route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'

export default function Landing () {



    return (
        <div className="Landing">
        <h1>STAR WARS</h1>
        <Nav/>
        <Routes>  
             <route>
                </route>
        </Routes>
        </div>
    )
}


///////////////// FROM CLASS ////////////////////////////////////////////////
          // useEffect(() => {
          //   const getMovies = async () => {
          //     const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)
          //     console.log(response)
          //   }

          //   getMovies()
          // }, [])

