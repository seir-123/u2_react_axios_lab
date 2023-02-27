import { Route,Routes } from "react-router-dom"
import StarshipsList from "./StarshipsList"
import Planets from "./Planets"
import Characters from "./Characters"
import Nav from "./Nav"
import Home from "./Home"
import StarshipPage from "./StarshipPage"

export default function Main(props) {
    return (
        <div>
            <Nav />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/starships' element={<StarshipsList starShips={props.starShips} setSelectedShip={props.setSelectedShip}/>} />
                <Route exact path='/planets' element={<Planets planets={props.planets}/>} />
                <Route exact path='/characters' element={<Characters characters={props.characters}/>} />
                <Route exact path={`/starships/${props.selectedShip}`} element={<StarshipPage selectedShip={props.selectedShip}/>} />
            </Routes>

        </div>
    )
}