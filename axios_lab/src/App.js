//
import { BASE_URL } from './globals'

import './App.css';

import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'       
import Starships from './components/StarshipsList'
// import Planets from './components/Planets'
// import Characters from './components/Characters'




function App() {

  const [starships, setStarships] = useState ([])

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/StarshipsList`)
      setStarships(response.data.results)
    }
    getStarships()
  }, [])








  return (
    <div className="App">
      <header className="header">
        <Header/>
      </header>
      <main className="main">
        <Routes>
          <Route path="/StarshipsList" element={<Starships results = {starships}/>}></Route>
          {/* <Route path="/Planets" element={<Planets results = {planets}/>}></Route>
          <Route path="/Characters" element={<Characters results = {characters}/>}></Route> */}
        </Routes>

      </main>
    </div>
  );
}

export default App;
