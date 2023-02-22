import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from './Globals.js'
import StarshipsList from './Components/StarshipsList';
import Starroutes from './Components/Starroutes'
import Planets from './Components/Planets'
import People from './Components/People'
import Speccies from './Components/Species'




function App() {

  const [starships, setStarships] = useState ([])

  useEffect (() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      console.log(response)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])



  return (
    <div className="App">

      <Starroutes/>
      <StarshipsList starships={starships}/>
                      
    </div>
  )
}

export default App;

