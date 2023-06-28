import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals';

const FilmList = () => {
  const [films, setFilms] = useState([]);

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
    return <div>Loading...Take a chill pill</div>;
  } else {
    return (
      <div className="film-grid">
        {films.map((film, index) => (
          <div key={index} className="film">
            <h3>{film.title}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default FilmList;