import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StarshipsList from './components/StarshipsList'
import Nav from './components/Nav'
import Home from './components/Home'
// import Films from './components/Films'
import People from './components/People'
import Planets from './components/Planets'
import Species from './components/Species'
import Starships from './components/Starships'
import Vehicles from './components/Vehicles'
import { Route, Routes } from 'react-router-dom'
import { BASE_URL } from './globals'
import { SPECIES_URL } from './globals'
import { FILMS_URL } from './globals'
import { PEOPLE_URL } from './globals'
import { PLANETS_URL } from './globals'
import { SHIPS_URL } from './globals'
import { VEHICLES_URL } from './globals'





const App = () => {
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [species, setSpecies] = useState ([])
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
      const getFilms = async () => {
        const response = await axios.get(`${FILMS_URL}`) 
        console.log(response.data.results)
        setFilms(response.data.results)
      }
      getFilms()
    }, [])


useEffect(() => {
  const getStartships = async () => {
    const response = await axios.get(`${SHIPS_URL}`) 
    // console.log(response.data.results)
    setStarships(response.data.results)
  }
  getStartships()
}, [])

 useEffect(() => {
      const getPeople = async () => {
        const response = await axios.get(`${PEOPLE_URL}`) 
        console.log(response.data.results)
        setPeople(response.data.results)
      }
      getPeople()
    }, [])

   useEffect(() => {
      const getPlanets = async () => {
        const response = await axios.get(`${PLANETS_URL}`) 
        console.log(response.data.results)
        setPlanets(response.data.results)
      }
      getPlanets()
    }, [])

 useEffect(() => {
      const getSpecies = async () => {
        const response = await axios.get(`${SPECIES_URL}`) 
        console.log(response.data.results)
        setSpecies(response.data.results)
      }
      getSpecies()
    }, [])


    useEffect(() => {
      const getVehicles = async () => {
        const response = await axios.get(`${VEHICLES_URL}`) 
        console.log(response.data.results)
        setVehicles(response.data.results)
      }
      getVehicles()
    }, [])






 return (
        <div className='routes-container'>
          <Nav />
          <main>
            <Routes>
              <Route path='/' element={<Home/>}></Route>  
              {/* <Route path='/Films' element={<Films/>}></Route> */}
              <Route path='/People' element={<People/>}></Route>
              <Route path='/Planets' element={<Planets/>}></Route>
              <Route path='/Species' element={<Species/>}></Route>
              <Route path='/Starships' element={<Starships/>}></Route>
              <Route path='/Vehicles' element={<Vehicles/>}></Route>
              <Route path='/StarshipsList' element={<StarshipsList starships={starships}/>}></Route>
            </Routes>
          </main>
        
        </div>
    )
}

export default App;
