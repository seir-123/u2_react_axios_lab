import { Link } from 'react-router-dom'


const Nav = () => {

    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/starshipslist">Starships</Link>
            <Link to="/planetslist">Planets</Link>
            <Link to="/characterslist">Characters</Link>
        </div>
    )
}

export default Nav