import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const getFilms = async () => {
            let response = await axios.get(`https://swapi.dev/api/films/`);
            setFilms(response.data.results);
    
        };
        getFilms();
    }, []);

if (films.length == 0) {
    return <h3> Loading...</h3>
} else {
    return (
        <div className="flex">
            {films.map((film) => (
                <div key={film.title} className="flex-item">
                    <h3>{film.title}</h3>
                <Link to={`/films/${film.url.match(/\d+/)[0]}`}>
                    <button className="details-btn">View</button>
                </Link>
                </div>
            ))}
        </div>
    )
}
}
export default Films