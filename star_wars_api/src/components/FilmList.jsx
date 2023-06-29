import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../globals';
import { useNavigate } from "react-router-dom"

const FilmList = () => {
  const [films, setFilms] = useState([]);
 
  let navigate = useNavigate()

const showFilm = (film) => {
  navigate(`${film.title}`, {state:{film:film}})

}

useEffect(() => {
    const getFilms = async () => {
      try {
        const response = await axios.get(`${BASE_URL}films`);
        setFilms(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getFilms();
  }, []);

  console.log(films);

  if (films.length === 0) {
    return <div>Loading...Don't force it.</div>;
  } else {
    return (
      <div className="ship-grid">
        {films.map((film, index) => (
          <div key={index} className="film" onClick={()=> showFilm(film)}>
            <h3>{film.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default FilmList;