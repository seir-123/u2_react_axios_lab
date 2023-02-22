import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StarshipsList from './StarshipsList'
import Home from './Home'
import PlanetsList from './PlanetsList'
import CharactersList from './CharactersList'

const Main = () => {

  const [starships, setStarships] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships`)
      setStarships(response.data.results)
    }
    getStarships()

    const getPlanets = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets`)
      setPlanets(response.data.results)
    }
    getPlanets()

    const getCharacters = async () => {
      const response = await axios.get(`https://swapi.dev/api/people`)
      setCharacters(response.data.results)
    }
    getCharacters()

  }, [])

  return (
    <div className='routes'>

      <Routes>
        <Route path='/starships' element={<StarshipsList starships={starships} />} />
        <Route path='/planets' element={<PlanetsList planets={planets} />} />
        <Route path='/characters' element={<CharactersList characters={characters} />} />
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  )
}

export default Main