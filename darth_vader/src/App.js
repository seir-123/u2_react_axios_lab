import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import StarshipsList from './components/StarshipsList'
import StarshipsPage from './components/StarshipsPage'
import Nav from './components/Nav'
import Home from './components/Home'
import People from './components/People'
import PeoplesPage from './components/PeoplesPage'
import Planets from './components/Planets'
import PlanetsPage from './components/PlanetsPage'
import Vehicles from './components/Vehicles'

import { PEOPLE_URL, PLANETS_URL, SHIPS_URL, VEHICLES_URL } from './globals'

const App = () => {
  const [starships, setStarships] = useState([])
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [vehicles, setVehicles] = useState([])



  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${SHIPS_URL}`)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])

  useEffect(() => {
    const getPeople = async () => {
      const response = await axios.get(`${PEOPLE_URL}`)
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
              <Route path='/People' element={<People people={people}/>}/>
              <Route path='/People/:index' element={<PeoplesPage people={people}/>}/>
              <Route path='/Planets' element={<Planets planets={planets}/>}/>
              <Route path='/Planets/:index' element={<PlanetsPage planets={planets}/>}/>
              <Route path='/StarshipsPage' element={<StarshipsPage starships={starships}/>}/>
              <Route path='/Vehicles' element={<Vehicles vehicles={vehicles}/>}/>
              <Route path='/StarshipsList' element={<StarshipsList starships={starships}/>} />
              <Route path='/StarshipsList/:index' element={<StarshipsPage starships={starships}/>}/>
            </Routes>
          </main>
          
        
        </div>
    )
}

export default App;
