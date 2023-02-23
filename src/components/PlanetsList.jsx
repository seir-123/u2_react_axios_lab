import { Link, useNavigate } from "react-router-dom";

export default function PlanetsList(props) {
  let navigate = useNavigate();
  const showPlanets = (index) => {
    navigate(`${index}`);
  };
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="grid" id="planets">
        {props.planets.map((planet, i) => (
          <div
            key={planet.name}
            onClick={() => showPlanets(i)}
            className="card"
          >
            <h2>{planet.name}</h2>
            <h3>{planet.terrain}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
