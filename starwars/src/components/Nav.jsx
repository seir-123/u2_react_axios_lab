import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div>
            <div className='homeLink'>
                <Link to='/' id='homeLink'>
                    <h1>Home</h1>
                </Link>
            </div>
            <div className="navLinks">  
                <Link to='/StarshipList' id='starShip'>
                    <h2>Starships</h2>
                </Link> 

                <Link to='/Planets' id="planets">
                    <h2>Planets</h2>
                </Link>    

                <Link to='/Characters' id='characters'>
                    <h2>Characters</h2>
                </Link>
            </div>
        </div>
    )
}


