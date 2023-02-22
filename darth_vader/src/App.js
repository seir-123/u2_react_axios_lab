import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import StarshipList from './components/StarshipsList'
import LandingPage from './components/LandingPage'





const App = () => {
  const [starships, setStarships] = useState([])
 


useEffect(() => {
  const getStartships = async () => {
    const response = await axios.get(`${BASE_URL}`) 
    // console.log(response.data.results)
    setStarships(response.data.results)
  }
  getStartships()
}, [])

  return (
    <div className='App'>
  <StarshipList starships={starships} />
  <LandingPage />
 
    </div>
  );
}

export default App;
