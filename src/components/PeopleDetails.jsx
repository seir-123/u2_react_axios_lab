import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PeopleDetails = (props) => {
  const [person, setPerson] = useState("");

  let { index } = useParams();
  useEffect(() => {
    let selectedPerson = props.person[index];
    setPerson(selectedPerson);
  });

  return person ? (
    <div className="detail">
      <Link to="/People">Back</Link>

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
          <h1>{person.name}</h1>
          <h2>Height: {person.height}cm</h2>
          <h3>Mass: {person.mass}</h3>
          <p>Birth Year: {person.birth_year}</p>        </div>
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
    <h1>Person not found</h1>
  );
};

export default PeopleDetails;
