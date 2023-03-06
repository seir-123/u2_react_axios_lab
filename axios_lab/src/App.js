import { BASE_URL } from './Globals'

import './App.css';

import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'       
import Starships from './components/Starships'
import StarshipsList from "./components/StarshipsList"
import Planets from './components/Planets'
import PlanetsList from './components/PlanetsList'
import Characters from './components/Characters'
import CharactersList from './components/CharactersList'


function App() {




  const [starship, setStarship] = useState ([])

  useEffect(() => {
    const getStarship = async () => {
      const response = await axios.get(`${BASE_URL}/starships/`)
      setStarship(response.starship.results)
    }
    getStarship()
  }, [])



  const [character, setCharacter] = useState ([])

  useEffect(() => {
    const getCharacter = async () => {
      const response = await axios.get(`${BASE_URL}/people/`)
      setCharacter(response.character.results)
    }
    getCharacter()
  }, [])



  const [planet, setPlanet] = useState ([])

  useEffect(() => {
    const getPlanet = async () => {
      const response = await axios.get(`${BASE_URL}/planets`)
      setPlanet(response.planet.results)
    }
    getPlanet()
  }, [])






  return (
    <div className="App">
      <header id="header">
        <Header/>
      </header>
      <Routes>
        <Route path="/StarshipsList" element={<StarshipsList starship={starship}/>}></Route>
        <Route path="/CharactersList" element={<CharactersList character={character}/>}></Route>
        <Route path="/PlanetsList" element={<PlanetsList planet={planet}/>}></Route>
        <Route path="/Starships" element={<Starships starship={starship}/>}></Route>
        <Route path="/Characters" element={<Characters character={character}/>}></Route>
        <Route path="/Planets" element={<Planets planet={planet}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;


