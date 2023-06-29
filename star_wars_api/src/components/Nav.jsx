import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/films">Films</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/characters">Characters</Link>
    </div>
  );
}

export default Nav;
