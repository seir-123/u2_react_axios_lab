import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'



export default function PlanetsPage(props) {

    const [planet, setPlanet] = useState('')

    let { index } = useParams()

    useEffect(() => {
        let selectedPlanet = props.planets[index]
        setPlanet(selectedPlanet)
    }, [])

    return (
        <div className="planet-page">
            <div className="info">
                <h1>{planet.name}</h1>
                <h3>Population: {planet.population}</h3>
                <h3>Climate: {planet.climate}</h3>
            </div>
           
        </div>
    )
}