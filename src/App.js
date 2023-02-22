import './App.css';
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import  axios  from 'axios'

import FilmDetails from './components/FilmDetails'
import FilmsList from './components/FilmsList'
import Home from './components/Home'
import Nav from './components/Nav'
import PeopleList from './components/PeopleList'
import PlanetsList from './components/PlanetsList'
import SpeciesList from './components/SpeciesList'
import StarshipsList from './components/StarshipsList'
import StarshipDetails from './components/StarshipDetails'

import VehiclesList from './components/VehiclesList';
import { VEHICLES_URL } from './globals'



function App() {
  const [vehicles, setVehicles] = useState([])
  useEffect(() => {
    const getVehicles = async () => {
      const response = await axios.get(`${VEHICLES_URL}`)
      console.log(response.data.results)
      setVehicles(response.data.results)
    }
    getVehicles()
  }, [])

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='FilmsList/:index' element={<FilmDetails films={films}/>}/>
          <Route path='FilmsList' element={<FilmsList films={films}/>}/>
          <Route path='PeopleList' element={<PeopleList people={people} />}/>
          <Route path='PlanetsList' element={<PlanetsList planets={planets} />}/>
          <Route path='SpeciesList' element={<SpeciesList species={species} />}/>
          <Route path='StarshipsList' element={<StarshipsList starships={starships} />}/>
          <Route path='StarshipsList/:index' element={<StarshipDetails starships={starships}/>}/> */}
          <Route path='VehiclesList' element={<VehiclesList vehicles={vehicles} />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
