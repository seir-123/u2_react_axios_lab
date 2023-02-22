import { Route, Routes } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './Home'
import StarshipList from './StarshipList'
import Planets from './Planets'
import Characters from './Characters'
import { PLANETS_PATH } from '../globals'
import { SHIP_PATH } from '../globals'
import { CHARACTERS_PATH } from '../globals' 
import axios from 'axios'




export default function Main () {

    const [starShips, setStarships] = useState([])
    const [planets, setPlanets] = useState([])
    const [characters, setCharacters] = useState([])


    useEffect(() => {
      const getPlanets = async () => {
      const response = await axios.get(`${ PLANETS_PATH }`)
      console.log(response.data.results)
      setPlanets(response.data.results)

    }
    getPlanets()

  },[])


     useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`${ CHARACTERS_PATH }`)
      console.log(response.data.results)
      setCharacters(response.data.results)

    }
    getCharacters()

  },[])




    useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${ SHIP_PATH }`)
      console.log(response.data.results)
      setStarships(response.data.results)

    }
    getStarships()

  },[])

    return (
        <div className = "main">   
            <Routes>
                <Route  path='/StarshipList'
                element={<StarshipList
                                starShips={starShips}/>} />

                <Route path='/Planets'
                element={<Planets
                                planets={planets}/>} />

                <Route path='/Characters'
                element={<Characters
                                characters={characters}/>} />
                <Route path='/' 
                element={<Home/>}/>                            
            </Routes>
        </div>
    )
}















