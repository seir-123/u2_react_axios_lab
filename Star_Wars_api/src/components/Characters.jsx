import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Characters = () => {
    cost [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getCharacters = async () => {
            let response = await axios.get(`https://swapi.dev/api/people`);
            setCharacters(response.data.results);
    };
    getCharacters();
    }, []);

    if (characters.length == 0) {
        return <h3>Loading...</h3>;
    } else {
        return (
            <div className="flex">
                {characters.map((characters) => (
                    <div key={characters.name} className="flex-item">
                        <h3>{characters.name}</h3>
                        <p>Height: {characters.height}</p>
                        <p>Mass: {characters.mass}</p>
                        <p>Birth Year: {characters.birth_year}</p>
                        <p>Gender: {characters.gender}</p>

                        <Link to={`/characters/${character.url.match(/\d+/)[0]}`}>
                            <button className="details-btn">Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
};

export default Characters