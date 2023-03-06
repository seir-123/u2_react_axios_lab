import { Link } from "react-router-dom"

export default function PlanetsPage(props) {
    return (
        <div>
            <Link to='/planets'>Back</Link>
            <div>
                <h1>{props.selplanet.name}</h1>
                <h3>Climate: {props.selplanet.climate}</h3>
                <h3>Terrain: {props.selplanet.terrain}</h3>
                <h3>Population: {props.selplanet.population}</h3>
            </div>
        </div>
    )
}