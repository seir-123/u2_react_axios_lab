import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './components/Main'
import StarshipsList from './components/StarshipsList'
import PlanetsList from './components/PlanetsList'
import CharactersList from './components/CharactersList'
import StarshipPage from './components/StarshipPage'
import PlanetsPage from './components/PlanetsPage'
import CharactersPage from './components/CharactersPage'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/StarshipsList" element={<StarshipsList />}/>
        <Route path="/PlanetsList" element={<PlanetsList />}/>
        <Route path="/CharactersList" element={<CharactersList />}/>
        <Route path="/StarshipsList/:ship_id" element={<StarshipPage />}></Route>
        <Route path="/PlanetsList/:planet_id" element={<PlanetsPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
