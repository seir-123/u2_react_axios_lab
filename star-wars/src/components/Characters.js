import { Link } from "react-router-dom"

export default function Characters(props) {
    return (
        <div>
            {
                props.characters.map((character) => (
                    <div>
                        <Link to={`/characters/${character.name}`} onClick={() => props.getselchara(character.url)}>{character.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}