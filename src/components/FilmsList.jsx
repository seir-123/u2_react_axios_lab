import { Link, useNavigate } from "react-router-dom";

export default function FilmsList(props) {
  let navigate = useNavigate();
  const showFilm = (index) => {
    navigate(`${index}`);
  };
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="grid" id="films">
        {props.films.map((film, i) => (
          <div key={film.title} onClick={() => showFilm(i)} className="card">
            <h2>{film.title}</h2>
            <h3>{film.release_date}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
