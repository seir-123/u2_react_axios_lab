import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CharacterDetail(){
  
  const [character, setCharacter] = useState()
  let {id} = useParams()
  
  useEffect(()=>{
    const getCharacter = async() => {
      const response = await axios.get(`https://swapi.dev/api/people/`)
      setCharacter(response.data.results[id])
    }
    getCharacter()
  },[])


  return character ? (
    <div className="detail">
      <h2>Name: {character.name}</h2>
      <h2>Height: {character.height}</h2>
      <h2>Mass: {character.mass}</h2>
      <h2>Hair Color: {character.hair_color}</h2>
      <h2>Skin Color: {character.skin_color}</h2>
      <h2>Eye Color: {character.eye_color}</h2>
      <h2>Birth Year: {character.birth_year}</h2>
      <h2>Gender: {character.gender}</h2>
      <Link to="/Characters" className="back-link">⬅ Return to character list</Link>
    </div>
  ) : <h3>Calling for your character...</h3>
}
