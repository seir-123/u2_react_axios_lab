import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


export default function PeoplesPage(props) {

    const [character, setCharacter] = useState('')

    let { index } = useParams()

    useEffect(() => {
        let selectedCharacter = props.characters[index]
        setCharacter(selectedCharacter)
    }, [])

    return (
        <div className="smallCard">
            <div className="info">
                <h1>{character.name}</h1>
                <h3>Height: {character.height}</h3>
                <h3>Born: {character.birth_year}</h3>
            </div>
           
        </div>
    )
}