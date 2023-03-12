import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


export default function StarshipsPage(props) {
    

    const [ship, setShip] = useState('')

    let { index } = useParams()

    useEffect(() => {
        let selectedShip = props.starships[index]
        setShip(selectedShip)
    }, [])

    return (
        <div className="card-page">
            <div className="list">
                <h1>{ship.name}</h1>
                <h3>Model: {ship.model}</h3>
                <h3>Manufacturer: {ship.manufacturer}</h3>
            </div>
            {/* <Link to="/StarshipsList">return</Link> */}
        </div>
    )
}