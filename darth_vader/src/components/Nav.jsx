import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {

    return (
        <nav className='navBar'>
          <div>
          <Link to='/'>Home</Link>  
          <Link to='/Films'> <h2>Films</h2> </Link>
          <Link to='/People'> <h2>People</h2> </Link>
          <Link to='/Planets'> <h2>Planets</h2> </Link>
          <Link to='/Species'> <h2>Species</h2> </Link>
          <Link to='/Starships'> <h2>Starships</h2> </Link>
          <Link to='/Vehicles'> <h2>Vehicles</h2> </Link>
          </div>
        </nav>
    )
}