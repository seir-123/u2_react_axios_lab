import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CharactersList(){

  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    const getCharacters = async() => {
      const response = await axios.get(`https://swapi.dev/api/people/`)
      setCharacters(response.data.results)
    }
    getCharacters()
  },[])

  let navigate = useNavigate()

  const showCharacter = (key) => {
    navigate(`${key}`)
  }

  return(
    <div className="characters">
      <h2>List of Characters</h2>
      {
        characters.map((character, key) => (
          <div key={key} onClick={()=>showCharacter(key)} className="card">
            <h3>{character.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
