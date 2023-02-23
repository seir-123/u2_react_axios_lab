import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FilmDetails = (props) => {
  const [film, setFilm] = useState("");

  let { index } = useParams();
  useEffect(() => {
    let selectedFilm = props.film[index];
    setFilm(selectedFilm);
  });

  return film ? (
    <div className="detail">
      <Link to="/Films">Back</Link>

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
          <h1>{film.title}</h1>
          <h2>{film.opening_crawl}</h2>
          <h3>Director: {film.director}</h3>
          <p>Release Date: {film.release_date}</p>        </div>
      </div>
      <div className="info-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
            {/* <h3>ESRB Rating: {game.esrb_rating ? game.esrb_rating.name : "no rating"}</h3> */}
        </div>
      </div>
    </div>
  ) : (
    <h1>Film not found</h1>
  );
};

export default FilmDetails;
