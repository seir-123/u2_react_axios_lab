import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharacterPage = (props) => {
    const [character, setCharacter] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getCharacter = async () => {
            let response = await axios.get(`https://swapi.dev/api/people/${id}/`);
            setCharacter(response.data);
        };
        getCharacter();
    }, []);

if (character.length == 0) {
    return <h3>Loading...</h3>
} else {
    return (
        <div className="details-page">
            <h1> {character.name}</h1>
            <Link to="/characters">
                <button className="cp-btn">Back</button>
            </Link>
        </div>
    );
}
};

export default CharacterPage;