import { Link } from 'react-router-dom'



const Starroutes = () => {
  return (
    <div>
      <ul className = "ulbar" style={{ listStyle: 'none', display: 'flex' }}>
        <li className = "landing">
          <Link to="/" className="about-link">Home</Link>
        </li>
        <li className = "ships">
          <Link to="/StarshipsList" className="about-link">Ships</Link>
        </li>
        <li className = "people">
          <Link to="/Planets" className="about-link">Planets</Link>
        </li>
        <li className = "people">
          <Link to="/People" className="about-link">People</Link>
        </li>
        <li className = "spec">
          <Link to="/Species" className="about-link">Species</Link>
        </li>
      </ul>
    </div>
  )
}

export default Starroutes