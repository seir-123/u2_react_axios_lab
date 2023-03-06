import { Link } from "react-router-dom"

export default function StarshipsList(props) {
    return (
        <div>
            {
                props.starShips.map((starship) => (
                    <div key={starship.name} className='starships card'>
                        <Link to={`/starships/${starship.name}`} onClick={() => props.getSelectedShip(starship.url)}>{starship.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}