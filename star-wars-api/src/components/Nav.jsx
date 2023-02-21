import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <Link to="/StarshipsList">
                <h2>Starships</h2>
            </Link>
            <Link to="/PlanetsList">
                <h2>Planets</h2>
            </Link>
            <Link to="/CharactersList">
                <h2>Characters</h2>
            </Link>
        </div>
    )
}