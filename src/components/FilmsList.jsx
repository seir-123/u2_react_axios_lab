import { useState, useEffect } from 'react'
import  axios  from 'axios'
import { FILMS_URL } from '../globals'


export default function FilmsList () {
    const [films, setFilms] = useState([])

    useEffect(() => {
      const getFilms = async () => {
        const response = await axios.get(`${FILMS_URL}`)
        console.log(response.data.results)
        setFilms(response.data.results)
      }
  
      getFilms()
    }, [])
    console.log (films)
    return (
        <div className="grid" id="films">
            {
                films.map((film) => (
                    <div key={film.title} className="card">
                        <h2>{film.title}</h2>
                        <h3>{film.release_date}</h3>
                    </div>
                ))
            }
        </div>
    )
}