import { Link, useNavigate } from "react-router-dom";

export default function StarshipsList(props) {
  let navigate = useNavigate();
  const showStarship = (index) => {
    navigate(`${index}`);
  };
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="grid" id="starships">
        {props.starships.map((starship, i) => (
          <div
            className="card"
            onClick={() => showStarship(i)}
            key={starship.name}
          >
            <h2>{starship.name}</h2>
            <h3>{starship.manufacturer}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
