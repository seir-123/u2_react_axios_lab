import './App.css'
import React from 'react'
import axios from 'axios'
import Nav from './components/Nav'
import { BASE_URL } from "./globals"
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import StarshipsList from './components/StarshipsList'

const App = () => {
  const [starshipsList, setStarshipsList] = useState([])

  useEffect(() => {
    const getStarshipsList = async () => {
      const response = await axios.get(`${BASE_URL}`)
        console.log(response.data.results)
        setStarshipsList(response.data.results)
    }

                getStarshipsList()
  }, [])

  return (
    <div className="App">
      <main>
      <Nav/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/starships" element={ <StarshipsList/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;
