import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function StarshipsList (props) {

    const [starship, setStarship] = useState('')

    let { index } = useParams()

    useEffect(() => {
        let selectedStarship = props.starships.find(
            (starship) => starship.index === parseInt(index)
        )
        setStarship(selectedStarship)
    }, [props.starships, index])

    console.log(props.starships)
    return (
        <div className="detail">
            <div className="detail-header">
                <h2>{starship.model}</h2>
                <h3>Manufacturer: {starship.manufacturer}</h3>
                <h3>Class: {starship.starship_class}</h3>
                <h3>Cost in Credits:{starship.cost}</h3>
                <h3>Maximum Speed in Atmosphere: {starship.max_atmosphering_speed}</h3>
                <h3>Manufacturer: {starship.manufacturer}</h3>
                <h3>Hyperdrive Rating: {starship.hyperdrive_rating}</h3>
                <h3>Manufacturer: {starship.manufacturer}</h3>


            </div>
        </div>

    )

}