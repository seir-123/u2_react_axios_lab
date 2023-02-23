import Home from './Home'
import StarshipsList from './StarshipsList'
import CharactersList from './Characters'
import PlanetsList from './Planets'
import ShipDetails from './StarshipPage'
import PlanetDetail from './PlanetPage'
import CharacterDetail from './CharacterDetail'
import { Route, Routes } from 'react-router-dom'

export default function Main(){

  let userName = "starwars_fanboy1234"

  return(
    <div className="main">
      <Routes>
        <Route path="/" element={<Home userName={userName}/>} />
        <Route path="/StarshipsList" element={<StarshipsList/>}/>
        <Route path="/StarshipsList/:id" element={<ShipDetails/>}/>
        <Route path="/Planets" element={<PlanetsList />}/>
        <Route path="/Planets/:id" element={<PlanetDetail />}/>
        <Route path="/Characters" element={<CharactersList />}/>
        <Route path="/Characters/:id" element={<CharacterDetail />}/>
      </Routes>
    </div>
  )
}
