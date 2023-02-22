import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function CharactersList(props) {

    let navigate = useNavigate()

    const showCharacter = (index) => {
        navigate(`${index}`)
    }

    return (
        <div className="grid">
            {
                props.characters.map((character, index) => (
                    <div key={index} className="card" onClick={() => showCharacter(index)}>
                        <h3>{character.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}