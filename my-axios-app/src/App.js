import StarshipsList from './components/StarshipsList';
import Planets from './components/Planets';
import Characters from './components/Characters'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Main from './components/Main'
import './App.css';
import './index'
import { BASE_URL } from './globals';
import StarshipPage from './components/StarshipPage'

function App() {
  const [starships, setStarships] = useState ([])
  const [ planets, setPlanets] = useState ([])
  const [ characters, setCharacters] = useState ([])

useEffect(() => {
  const getStarships = async () => {
    const response = await axios.get(`${BASE_URL}/starships`)
    //console.log(response)
    setStarships(response.data.results)
    //console.log(starships)
  }
  getStarships()
}, [])

useEffect (() => {
const getPlanets = async () => {
  const response = await axios.get(`${BASE_URL}/planets`)
  setPlanets(response.data.results)
}
getPlanets()
}, [])

useEffect (() => {
  const getCharacters = async () => {
    const response = await axios.get(`${BASE_URL}/people`)
    setCharacters(response.data.results)
  }
  getCharacters()
},[])

  return (
    <div className="App">
      <header>
{/* <Nav /> */}
</header>

  <Routes>
<Route path="/ships/:id" element = 
{<StarshipPage starships={starships}/>
}/>

</Routes>
<Main />
<Planets planets={planets}/>
<Characters characters={characters}/>
<StarshipsList starships={starships}/>


   </div>
  );
}

export default App;
