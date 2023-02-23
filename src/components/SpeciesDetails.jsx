import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SpeciesDetails = (props) => {
  const [species, setSpecies] = useState("");

  let { index } = useParams();
  useEffect(() => {
    let selectedSpecies = props.species[index];
    setSpecies(selectedSpecies);
  });

  return species ? (
    <div className="detail">
      <Link to="/Species">Back</Link>

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
          <h1>{species.name}</h1>
          <h2>{species.classification}</h2>
          <h3>{species.designation}</h3>
          <p>Average Height: {species.average_height}cm</p>        
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
    <h1>Species not found</h1>
  );
};

export default SpeciesDetails;
