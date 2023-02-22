import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function StarshipPage(props) {

    const [ship, setShip] = useState('')

    let { index } = useParams()

    useEffect(() => {
        let selectedShip = props.starships[index]
        setShip(selectedShip)
    }, [])

    return (
        <div>
            <div>
                <h1>{ship.name}</h1>
                <h3>Model: {ship.model}</h3>
                <h3>Manufacturer: {ship.manufacturer}</h3>
            </div>
            <Link to="/StarshipsList">return</Link>
        </div>
    )
}