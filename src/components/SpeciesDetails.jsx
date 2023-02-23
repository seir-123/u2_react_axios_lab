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
          {/* <h3>Rating: {game.rating}/5</h3>
            <h3>ESRB Rating: {game.esrb_rating ? game.esrb_rating.name : "no rating"}</h3> */}
        </div>
        {/* <p>Release Date: {game.released}</p> */}
      </div>
    </div>
  ) : (
    <h1>Species not found</h1>
  );
};

export default SpeciesDetails;
