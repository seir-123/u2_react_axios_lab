import { Route,Routes } from "react-router-dom"
import StarshipsList from "./StarshipsList"
import Planets from "./Planets"
import Characters from "./Characters"
import Nav from "./Nav"
import Home from "./Home"
import StarshipPage from "./StarshipPage"
import PlanetsPage from "./PlanetsPage"
import CharacterPage from "./CharacterPage"

export default function Main(props) {
    return (
        <div>
            <Nav />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/starships' element={<StarshipsList starShips={props.starShips} getSelectedShip={props.getSelectedShip}/>} />
                <Route exact path='/planets' element={<Planets planets={props.planets} getselplanet={props.getselplanet}/>} />
                <Route exact path='/characters' element={<Characters characters={props.characters} getselchara={props.getselchara}/>} />
                <Route exact path='/starships/:id' element={<StarshipPage selectedShip={props.selectedShip}/>} />
                <Route exact path='/planets/:id' element={<PlanetsPage selplanet={props.selplanet}/>} />
                <Route exact path='/characters/:id' element={<CharacterPage selchara={props.selchara}/>} />
            </Routes>

        </div>
    )
}