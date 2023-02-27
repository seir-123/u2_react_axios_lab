export default function StarshipPage(props) {
    return (
        <div>
            <h3>Manufacturer : {props.starship.manufacturer}</h3>
            <h3>Cost: {props.starship.cost_in_credits} credits</h3>
            <h3>Crew: {props.starship.crew}</h3>
            <h3>Passengers: {props.starship.passengers}</h3>
        </div>
    )
}