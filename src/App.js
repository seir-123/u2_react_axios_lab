import { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from './Globals.js'
import StarshipsList from './Components/StarshipsList';
import Starroutes from './Components/Starroutes'
import Planets from './Components/Planets'
import People from './Components/People'
import Species from './Components/Species'
import Landingpage from './Components/Landingpage'
import Starshippage from './Components/Starshippage';




function App() {

  const [starships, setStarships] = useState ([])
  const [planets, setPlanets] = useState ([])
  const [people, setPeople] = useState ([])
  const [species, setSpecies] = useState ([])

  useEffect (() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])

  useEffect (() => {
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/planets`)
      console.log(response)
      setPlanets(response.data.results)
    }
    getPlanets()
  }, [])

  useEffect (() => {
    const getPeople = async () => {
      const response = await axios.get(`${BASE_URL}/people`)
      setPeople(response.data.results)
    }
    getPeople()
  }, [])

  useEffect (() => {
    const getSpecies = async () => {
      const response = await axios.get(`${BASE_URL}/species`)
      setSpecies(response.data.results)
    }
    getSpecies()
  }, [])









  return (
    <div className="App">
      <Starroutes />
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path= "/StarshipsList" element={<StarshipsList starships={starships} />} />
        <Route path="/Planets" element={<Planets planets={planets} />} />
        <Route path="/People" element={<People people={people} />} />
        <Route path="/Species" element={<Species species={species} />} /> 
        <Route path="/Starshippage" element={<Starshippage starships={starships}/>} />
      </Routes>
     
                      
    </div>
  )
}

export default App;

