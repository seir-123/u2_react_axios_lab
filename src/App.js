import './App.css'
import React from 'react'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import StarshipsList from './components/StarshipsList'

const App = () => {


  return (
    <div className="App">
      <Nav/>
      <main>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/starships" element={ <StarshipsList/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;
