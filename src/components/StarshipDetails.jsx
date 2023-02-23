import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StarshipDetails = (props) => {
  const [starship, setStarship] = useState("");

  let { index } = useParams();

  useEffect(() => {
    let selectedStarship = props.starships[index];
    setStarship(selectedStarship);
  });

  return starship ? (
    <div className="detail">
      <Link to="/Starships">Back</Link>

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
          <h1>{starship.name}</h1>
          <h2>{starship.manufacturer}</h2>
          <h3>Credits: {starship.cost_in_credits}</h3>
          <p>Length: {starship.length}</p>
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
    <h1>Starship not found</h1>
  );
};

export default StarshipDetails;
