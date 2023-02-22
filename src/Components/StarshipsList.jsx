import { Link, useNavigate } from "react-router-dom";

const StarshipsList = (props) => {
  


let navigate = useNavigate()


const showShip = (ship) => {
  navigate(`${ship.index}`)
}




return (
    <div className="ship-grid">
      {props.starships.map((starship) => (
        <div className="card" onClick={() => showShip(starship)} key={starship.index}>
          <Link to={'/ships/${starship.index}'}></Link>
                <h3>{starship.name}</h3>
                <h3>{starship.manufacturer}</h3>
        </div>
      ))}
    </div>
  );
}

export default StarshipsList