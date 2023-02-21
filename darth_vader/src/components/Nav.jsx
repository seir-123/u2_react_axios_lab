// home: welcome to our page!
// add links to 
// components for people, planets, films, etc. 

import { Link } from 'react-router-dom'

export default function Nav () {

    return (
        <div className='Nav'>
          <Link to='/Films'> <h2>Films</h2> </Link>
          <Link to='/People'> <h2>People</h2> </Link>
          <Link to='/Planets'> <h2>Planets</h2> </Link>
          <Link to='/Species'> <h2>Species</h2> </Link>
          <Link to='/Starships'> <h2>Starships</h2> </Link>
          <Link to='/Vehicles'> <h2>Vehicles</h2> </Link>
          
            
        </div>
    )
}