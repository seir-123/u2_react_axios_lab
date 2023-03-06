import { useNavigate } from "react-router-dom"

export default function CharactersList(props){

    let navigate = useNavigate()
    const showCharacter = (index) => {
        navigate(`${index}`)
    }

    return(
        <div className="charactersListContainer">
            {
                props.results.map((character, index) => (
                    <div className="shipCard" key= {index} onClick={() => showCharacter(index)}>
                        <h4>{character.name}</h4>
                    </div>
                ))
            }
        </div>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////