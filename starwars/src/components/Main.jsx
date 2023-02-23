import Home from './Home'
import StarshipsList from './StarshipsList'
import CharactersList from './Characters'
import PlanetsList from './Planets'
import ShipDetails from './StarshipPage'
import { Route, Routes } from 'react-router-dom'

export default function Main(props){

  let userName = "username123"

  return(
    <div className="main">
      <Routes>
        <Route path="/" element={<Home userName={userName}/>} />
        <Route path="/StarshipsList" element={<StarshipsList/>}/>
        <Route path="/StarshipsList/:id" element={<ShipDetails/>}/>
        <Route path="/Planets" element={<PlanetsList planets={props.planets}/>}/>
        <Route path="/Characters" element={<CharactersList characters={props.characters}/>}/>
      </Routes>
    </div>
  )
}
