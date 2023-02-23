import { Link, useNavigate } from "react-router-dom";

export default function SpeciesList(props) {
  let navigate = useNavigate();
  const showSpecies = (index) => {
    navigate(`${index}`);
  };
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="grid" id="species">
        {props.species.map((species, i) => (
          <div
            className="card"
            onClick={() => showSpecies(i)}
            key={species.title}
          >
            <h2>{species.name}</h2>
            <h3>{species.classification}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
