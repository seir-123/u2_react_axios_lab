import './App.css';
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import  axios  from 'axios'

import FilmsList from './components/FilmsList'
import Home from './components/Home'
import Nav from './components/Nav'
import PeopleList from './components/PeopleList'
import PlanetsList from './components/PlanetsList'
import SpeciesList from './components/SpeciesList'
import StarshipsList from './components/StarshipsList'
import VehiclesList from './components/VehiclesList';
import { VEHICLES_URL, FILMS_URL, PEOPLE_URL, PLANETS_URL, SPECIES_URL, STARSHIPS_URL } from './globals'

import FilmDetails from './components/FilmDetails'
import StarshipDetails from './components/StarshipDetails.jsx'
import PeopleDetails from './components/PeopleDetails'
import PlanetDetails from './components/PlanetDetails'
import VehicleDetails from './components/VehicleDetails'
import SpeciesDetails from './components/SpeciesDetails'

function App() {
  const [films, setFilms] = useState([])
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [species, setSpecies] = useState([])
  const [starships, setStarships] = useState([])
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`${FILMS_URL}`)
      setFilms(response.data.results)
    }
    getFilms()
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
      setPlanets(response.data.results)
    }
    getPlanets()
  }, [])

  useEffect(() => {
    const getSpecies = async () => {
      const response = await axios.get(`${SPECIES_URL}`)
      setSpecies(response.data.results)
    }
    getSpecies()
  }, [])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${STARSHIPS_URL}`)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])

  useEffect(() => {
    const getVehicles = async () => {
      const response = await axios.get(`${VEHICLES_URL}`)
      setVehicles(response.data.results)
    }
    getVehicles()
  }, [])

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/films' element={<FilmsList films={films} />} />
          <Route path='/films/:index' element={<FilmDetails film={films} />} />
          <Route path='/people' element={<PeopleList people={people} />} />
          <Route path='/people/:index' element={<PeopleDetails person={people} />} />
          <Route path='/planets' element={<PlanetsList planets={planets} />} />
          <Route path='/planets/:index' element={<PlanetDetails planets={planets} />} />
          <Route path='/species' element={<SpeciesList species={species} />} />
          <Route path='/species/:index' element={<SpeciesDetails species={species} />} />
          <Route path='/starships' element={<StarshipsList starships={starships} />} />
          <Route path='/starships/:index' element={<StarshipDetails starships={starships} />} />
          <Route path='/vehicles' element={<VehiclesList vehicles={vehicles} />} />
          <Route path='/vehicles/:index' element={<VehicleDetails vehicles={vehicles} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;