import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function CharacterPage(props){
    const [character, setCharacter] = useState("")
    let { index } = useParams();
    useEffect(()=>{
        let selectedCharacter = props.data[index]
        setCharacter(selectedCharacter)
    }, [props.data, index])

    return character ?
    ( <div>
            <Link to ="/Characters"><button>Back to Characters</button></Link>
            <h3>Name:</h3><p>{character.name}</p> 
            <h3>Birth Year:</h3><p>{character.birth_year}</p> 
            <h3>Hair Color: </h3><p>{character.hair_color}</p> 
            <h3>Eye Color: </h3><p>{character.eye_color}</p> 


      </div>
    ) :  <h3>No character found</h3>; 
  }

