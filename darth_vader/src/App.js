import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import StarshipsList from './components/StarshipsList'
import Nav from './components/Nav'
import Home from './components/Home'
import Films from './components/Films'
import People from './components/People'
import Planets from './components/Planets'
import Species from './components/Species'
import StarshipsDetails from './components/StarshipsDetails'
import Vehicles from './components/Vehicles'

import { BASE_URL } from './globals'
import { SPECIES_URL } from './globals'
import { FILMS_URL } from './globals'
import { PEOPLE_URL } from './globals'
import { PLANETS_URL } from './globals'
import { SHIPS_URL } from './globals'
import { VEHICLES_URL } from './globals'






const App = () => {
  const [starshipsDetails, setStarshipsDetails] = useState([])
  const [films, setFilms] = useState([])
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [species, setSpecies] = useState ([])
  const [vehicles, setVehicles] = useState([])

  useEffect (() => {
    const getData = async () => {
    const response = await axios.get(`${BASE_URL}`)  
    setStarshipsDetails(response.data.results)
    }
    getData()
  })
  useEffect(() => {
      const getFilms = async () => {
        const response = await axios.get(`${FILMS_URL}`) 
        console.log(response.data.results)
        setFilms(response.data.results)
      }
      getFilms()
    }, [])


useEffect(() => {
  const getStartshipsDetails = async () => {
    const response = await axios.get(`${SHIPS_URL}`) 
    // console.log(response.data.results)
    setStarshipsDetails(response.data.results)
  }
  getStartshipsDetails()
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
              <Route path='/Films' element={<Films films={films}/>}></Route>
              <Route path='/People' element={<People people={people}/>}></Route>
              <Route path='/Planets' element={<Planets planets={planets}/>}></Route>
              <Route path='/Species' element={<Species species={species}/>}></Route>
              <Route path='/StarshipsDetails' element={<StarshipsDetails starshipsDetails={starshipsDetails}/>}></Route>
              <Route path='/Vehicles' element={<Vehicles vehicles={vehicles}/>}></Route>
              <Route path='/StarshipsList/:index' element={<StarshipsList starshipsList={starshipsDetails}/>}></Route>
            </Routes>
          </main>
        
        </div>
    )
}

export default App;
