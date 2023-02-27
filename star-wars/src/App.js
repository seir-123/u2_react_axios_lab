import './App.css';
import { BASE_URL } from './global';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Main from './components/Main';

function App() {
  const [starShips, setStarShips] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])
  const [selectedShip, setSelectedShip] = useState([])
  // const [selectedShipId, setSelectedShipId] = useState([])

  useEffect(() => {
    const getStarShips = async() => {
      const response = await axios.get(`${BASE_URL}starships`)
      setStarShips(response.data.results)
    }
    const getPlanets = async() => {
      const response = await axios.get(`${BASE_URL}planets`)
      setPlanets(response.data.results)
    }
    const getCharacters = async() => {
      const response = await axios.get(`${BASE_URL}people`)
      setCharacters(response.data.results)
    }
    getStarShips()
    getPlanets()
    getCharacters()
  },[])

  return (
    <div className="App">
      <Main starShips={starShips}
            planets={planets}
            characters={characters}
            selectedShip={selectedShip}
            setSelectedShip={setSelectedShip}/>
    </div>
  )
}

export default App;
