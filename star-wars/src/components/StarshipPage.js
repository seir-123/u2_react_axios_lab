import { Link } from "react-router-dom"

export default function StarshipPage(props) {
    return (
        <div>
            <Link to='/starships'>Back</Link>
            <div>
                <h3>Manufacturer : {props.selectedShip.manufacturer}</h3>
                <h3>Cost: {props.selectedShip.cost_in_credits} credits</h3>
                <h3>Crew: {props.selectedShip.crew}</h3>
                <h3>Passengers: {props.selectedShip.passengers}</h3>
            </div>
        </div>
    )
}