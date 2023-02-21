import './App.css';
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Starships from './components/Starships'
import Planets from './components/Planets'
import Characters from './components/Characters'
// import Home from './components/Home'
import NavBar from './components/NavBar'



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
          <Route path ="/" element={null}></Route>
          <Route path="/Starships" element = {<Starships results = {starShips}/>}/>
          <Route path="/Planets" element = {<Planets results = {planets}/>}/>
          <Route path="/Characters" element = {<Characters results ={character}/>}/>
      </Routes> 
    
      
    </div>
  );
}

export default App;
