import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const VehicleDetails = (props) => {
  const [vehicle, setVehicle] = useState("");

  let { index } = useParams();

  useEffect(() => {
    let selectedVehicle = props.vehicles[index];
    setVehicle(selectedVehicle);
  });

  return vehicle ? (
    <div className="detail">
      <Link to="/Vehicles">Back</Link>

      <div className="detail-header">
        <div
          style={{
            minWidth: "30em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <h1>{vehicle.name}</h1>
          <h2>{vehicle.manufacturer}</h2>
          <h3>Credits: {vehicle.cost_in_credits}</h3>
          <p>Length: {vehicle.length}</p>
        </div>
      </div>
      <div className="info-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
        </div>
      </div>
    </div>
  ) : (
    <h1>Vehicle not found</h1>
  );
};

export default VehicleDetails;
