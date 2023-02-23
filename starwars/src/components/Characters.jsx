import axios from "axios"
import { useEffect, useState } from "react"

export default function CharactersList(props){
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    const getCharacters = async() => {
      const response = await axios.get(`https://swapi.dev/api/people/`)
      setCharacters(response.data.results)
    }
    getCharacters()
  },[])

  return(
    <div className="characters">
      <h2>List of Characters</h2>
      {
        characters.map((character) => (
          <div key={character.name} className="character-card">
            <h3>{character.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
