import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

export default function Characters(props){
    // console.log(props)

    const [character, setCharacter] = useState("")
    let { index } = useParams();

    useEffect(() => {

        let selectedCharacter = props.character[index]
        setCharacter(selectedCharacter)
    }, [props.character, index])
        
    if (props && props.character){

        return character (

            <div className="CharactersContainer">       
                {
                props.Character.map((character) => (
                    <div key={character.id} className="characterCard">
                        <h4 className="labels">NAME</h4>
                        <h2 className="resultsLarge">{character.name}</h2>
    
                        <h4 className="labels">MODEL</h4>
                        <h3 className="resultsSmall">{character.model}</h3>
                        <h4 className="labels">MANUFACTURER</h4>
                        <h3 className="resultsSmall">{character.manufacturer}</h3>
                        <h4 className="labels">CREW</h4>
                        <h3 className="resultsSmall">{character.crew}</h3>
                        <h4 className="labels">PASSENGERS</h4>
                        <h3 className="resultsSmall">{character.name}</h3>
    
                        <h2 className="resultsLarge"><span>$</span>{character.model}</h2>
                    </div>
                ))}
            </div>
        )}
        else {
            return <h2>Loading</h2>
        }
    }
