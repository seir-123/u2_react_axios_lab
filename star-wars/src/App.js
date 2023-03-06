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
  const [selplanet, setselplanet] = useState([])
  const [selchara, setselchara] = useState([])

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

  const getSelectedShip = async(ship) => {
    const response = await axios.get(ship)
    setSelectedShip(response.data)
    if (selectedShip){
      console.log(selectedShip)

    }
  }

  const getselplanet = async(planet) => {
    const response = await axios.get(planet)
    setselplanet(response.data)
    if (selplanet){
      console.log(selplanet)

    }
  }

  const getselchara = async(chara) => {
    const response = await axios.get(chara)
    setselchara(response.data)
    if (selchara){
      console.log(selchara)

    }
  }

  return (
    <div className="App">
      <Main starShips={starShips}
            planets={planets}
            characters={characters}
            selectedShip={selectedShip}
            getSelectedShip={getSelectedShip}
            getselplanet={getselplanet}
            selplanet={selplanet}
            selchara={selchara}
            getselchara={getselchara}/>
    </div>
  )
}

export default App
