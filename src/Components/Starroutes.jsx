import { Link } from 'react-router-dom'



const Starroutes = () => {
  return (
    <div className="navbar">
          <Link to="/" className="about-link">Home</Link>
          <Link to="/StarshipsList" className="about-link">Ships</Link>
          <Link to="/Planets" className="about-link">Planets</Link>
          <Link to="/People" className="about-link">People</Link>
          <Link to="/Species" className="about-link">Species</Link>
    </div>
  )
}

export default Starroutes