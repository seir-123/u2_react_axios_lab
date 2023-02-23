import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CharactersPage = () => {
    const [characters, setCharacters] = useState()


    const { character_id } = useParams()

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await axios.get(`https://swapi.dev/api/people`)

        let selectedCharacter = response.data.results.find(
            (character, index) => index === parseInt(character_id)
          )
         setCharacters(selectedCharacter)
        };
        fetchCharacters();

      


  }, [])

  return characters ? (
    <div>
      <h1>{characters.name}</h1>
      <h2>Gender: {characters.gender}</h2>
      <h3>Birth Year: {characters.birth_year}</h3>
      <h3>Height: {characters.height}</h3>
      <h3>Mass: {characters.mass}</h3>
      <Link to="/characterslist">Return to Characters List</Link>
    </div>
  ) : null
}

export default CharactersPage