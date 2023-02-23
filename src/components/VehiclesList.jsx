import { Link, useNavigate } from "react-router-dom";

export default function VehiclesList(props) {
  let navigate = useNavigate();
  const showVehicle = (index) => {
    navigate(`${index}`);
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <div className="grid" id="vehicles">
        {props.vehicles.map((vehicle, i) => (
          <div
            className="card"
            onClick={() => showVehicle(i)}
            key={vehicle.title}
          >
            <h2>{vehicle.name}</h2>
            <h3>{vehicle.manufacturer}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
