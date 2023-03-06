import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link to="/"><span>HOME</span></Link><br></br>
            <Link to="/StarshipsList"><span>STARSHIPS</span></Link>  <br></br>
            <Link to="/PlanetsList"><span>PLANETS</span></Link><br></br>
            <Link to="/CharactersList"><span>CHARACTERS</span></Link><br></br>
        </div>
    )
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////