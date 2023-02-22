import './App.css';
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import StarshipsList from './components/StarshipsList'
import Planets from './components/Planets'
import Characters from './components/Characters'
import NavBar from './components/NavBar'
import Home from './components/Home'
import StarshipPage from './components/StarshipPage'
import PlanetPage from './components/PlanetPage'
import CharacterPage from './components/CharacterPage'



function App() {
const [starShips, setShips] = useState([]);
useEffect(() => {
  const getStarShips = async () => {
    const response = await axios.get(`${BASE_URL}/starships/`)
    setShips(response.data.results)    
  }

  getStarShips()
  
}, [])

const [planets, setPlanets] = useState([]);
useEffect(() => {
  const getPlanets = async () => {
    const response = await axios.get(`${BASE_URL}/planets/`)
    setPlanets(response.data.results)    
  }

  getPlanets()
  
}, [])

const [character, setChars] = useState([]);
useEffect(() => {
  const getChars = async () => {
    const response = await axios.get(`${BASE_URL}/people/`)
    setChars(response.data.results)    
  }

  getChars()
  
}, [])
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <h3>Click one of the buttons below to explore!</h3>
      <NavBar/>     
      <Routes> 
          <Route path ="/Home" element={<Home/>}/>
          <Route path="/Starships" element = {<StarshipsList results = {starShips}/>}/>
          <Route path ="/Starships/:index" element={<StarshipPage data= {starShips}/>}/>
          <Route path="/Planets" element = {<Planets results = {planets}/>}/>
          <Route path ="/Planets/:index" element={<PlanetPage data= {planets}/>}/>
          <Route path="/Characters" element = {<Characters results ={character}/>}/>
          <Route path="/Characters/:index" element = {<CharacterPage data ={character}/>}/>
      </Routes> 
    
      
    </div>
  );
}

export default App;
