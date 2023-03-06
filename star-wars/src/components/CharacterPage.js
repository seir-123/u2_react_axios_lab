import { Link } from "react-router-dom"

export default function CharacterPage(props) {
    return (
        <div>
            <Link to='/characters'>Back</Link>
                <div key={props.selchara.name} className='characters card'>
                    <h1>{props.selchara.name}</h1>
                    <h3>Height: {props.selchara.height}</h3>
                    <h3>Birth Year: {props.selchara.birth_year}</h3>
                    <h3>Gender: {props.selchara.gender}</h3>
                </div>
        </div>
    )
}
