import StarshipsList from './StarshipsList'
import PlanetsList from './PlanetsList'
import CharactersList from './CharactersList'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';
import StarshipPage from './StarshipPage'

export default function Main() {
    const [starships, setStarships] = useState([])
    const [planets, setPlanets] = useState([])
    const [characters, setCharacters] = useState([])

    useEffect(() => {
      const getStarships = async () => {
        const response = await axios.get(`https://swapi.dev/api/starships`)
        setStarships(response.data.results)
      }
      const getPlanets = async () => {
        const response = await axios.get(`https://swapi.dev/api/planets`)
        setPlanets(response.data.results)
      }
      const getCharacters = async () => {
        const response = await axios.get(`https://swapi.dev/api/people`)
        setCharacters(response.data.results)
      }
      getStarships()
      getPlanets()
      getCharacters()
    }, [])

    return (
        <div>
            <Routes>
                <Route path="/StarshipsList" element={<StarshipsList starships={starships}/>} />
                <Route path="/StarshipsList/:id" element={<StarshipPage starships={starships} />} />
                <Route path="/PlanetsList" element={<PlanetsList planets={planets}/>} />
                <Route path="/CharactersList" element={<CharactersList characters={characters}/>} />
            </Routes>
        </div>
    )
}