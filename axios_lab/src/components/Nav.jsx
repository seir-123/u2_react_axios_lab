import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link to="/"><span>HOME</span></Link>
            <Link to="/StarshipsList"><span>STARSHIPS</span></Link>  
            <Link to="/Planets"><span>PLANETS</span></Link>
            <Link to="/Characters"><span>CHARACTERS</span></Link>
        </div>
    )
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////