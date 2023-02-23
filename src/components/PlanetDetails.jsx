import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PlanetDetails = (props) => {
  const [planets, setPlanet] = useState("");

  let { index } = useParams();
  useEffect(() => {
    let selectedPlanet = props.planets[index];
    setPlanet(selectedPlanet);
  });

  return planets ? (
    <div className="detail">
      <Link to="/Planets">Back</Link>

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
          <h1>test</h1>
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
    <h1>Planet not found</h1>
  );
};

export default PlanetDetails;
