import { Link } from "react-router-dom";

export default function Nav(){
  return(
    <div className="nav-bar">
      
      <Link to="/" className="nav-link"><h2>Home</h2></Link>
      <Link to="/StarshipsList" className="nav-link"><h2>Starships</h2></Link>
      <Link to="/Planets" className="nav-link"><h2>Planets</h2></Link>
      <Link to="/Characters" className="nav-link"><h2>Characters</h2></Link>
  </div>
  )
}
