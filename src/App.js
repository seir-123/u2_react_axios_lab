import './App.css'
import axios from 'axios'
import { SHIP_PATH, PEOPLE_PATH, PLANETS_PATH, VEHICLES_PATH, FILMS_PATH, SPECIES_PATH } from './globals'
import { useState, useEffect } from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import StarshipsList from "./Components/Starship"
import People from './Components/People'
import Planets from './Components/Planets'
import Species from './Components/Species'
import Vehicles from './Components/Vehicles'
import Films from './Components/Films'
import StarshipPage from './Components/StarshipPage'
import SpeciesPage from './Components/SpeciesPage'
import PlanetsPage from './Components/PlanetsPage'
import FilmsPage from './Components/FilmsPage'
import PeoplePage from './Components/PeoplePage'
import VehiclesPage from './Components/VehiclesPage'
import Main from './Components/Main'

function App() {

const [vehicles, setVehicles] = useState(null)
const [species, setSpecies] = useState(null)
const [starships, setStarships] = useState(null)
const [planets, setPlanets] = useState(null)
const [people, setPeople] = useState(null)
const [films, setFilms] = useState(null)

useEffect(()=> {
  const getStarships = async () => {
    const response = await axios.get(`${SHIP_PATH}`)
    setStarships(response.data.results)
  }
  getStarships()
}, [])

useEffect(()=> {
  const getPlanets = async () => {
    const response = await axios.get(`${PLANETS_PATH}`)
    setPlanets(response.data.results)
  }
  getPlanets() 
}, [])

useEffect(()=> {
  const getVehicles = async () => {
    const response = await axios.get(`${VEHICLES_PATH}`)
    setVehicles(response.data.results)
  }
  getVehicles()
  }, [])

useEffect(()=> {
    const getPeople = async () => {
      const response = await axios.get(`${PEOPLE_PATH}`)
      setPeople(response.data.results)
    }
    getPeople() 
  }, [])

  useEffect(()=> {
    const getSpecies = async () => {
      const response = await axios.get(`${SPECIES_PATH}`)
      setSpecies(response.data.results)
    }
    getSpecies()
  }, []) 

  useEffect(()=> {
    const getFilms = async () => {
      const response = await axios.get(`${FILMS_PATH}`)
      setFilms(response.data.results)
    }
    getFilms()
  }, []) 

  return (

    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="Starships" element={<StarshipsList starships={starships}/>} />
        <Route path="Films/:index" element={<FilmsPage films={films}/>} />
        <Route path="People/:index" element={<PeoplePage people={people}/>} />
        <Route path="Species/:index" element={<SpeciesPage species={species}/>} />
        <Route path="Vehicles/:index" element={<VehiclesPage vehicles={vehicles}/>} />
        <Route path="Planets/:index" element={<PlanetsPage planets={planets}/>} />
        <Route path="Starships/:index" element={<StarshipPage starships={starships}/>} />
        <Route path="People" element={<People people={people}/>} />
        <Route path="Species" element={<Species species={species}/>}/>
        <Route path="Planets" element={<Planets planets={planets}/>}/>
        <Route path="Films" element={<Films films={films}/>}/>
        <Route path="Vehicles" element={<Vehicles vehicles={vehicles}/>}/>
      </Routes>
    </div>

  
  ) 
}


export default App;


// function App() {

// return starships ? (
//   <div className="App">
//     <Nav />
//     <Landing/>
//   </div>
// ): null
// }
