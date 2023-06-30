// import './styles/App.css'
import { Router, Link } from 'react-router-dom' 

const Nav = () => {
    return (
    <div className="Nav">
      <ul>

        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/starships">STARSHIPS</Link>
        </li>
        <li>
          <Link to="/films">FILMS</Link>
        </li>

    
      </ul>
    </div>
    )
}
export default Nav
//link to each of routes