import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function PlanetPage(props) {

    const [planet, setPlanet] = useState('')

    let { index } = useParams()

    useEffect(() => {
        let selectedPlanet = props.planets[index]
        setPlanet(selectedPlanet)
    }, [])

    return (
        <div>
            <div>
                <h1>{planet.name}</h1>
                <h3>Population: {planet.population}</h3>
                <h3>Climate: {planet.climate}</h3>
            </div>
            <Link to="/PlanetsList">return</Link>
        </div>
    )
}