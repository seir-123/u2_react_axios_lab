import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function StarshipPage(props) {

    const [ship, setShip] = useState('')

    let { id } = useParams()

    useEffect(() => {
        let selectedShip = props.starships.find(
            (ship) => ship.id === parseInt(id)
        )
        setShip(selectedShip)
    }, [props.name, id])

    return (
        <div>
            <div>
                <h1>{ship.name}</h1>
            </div>
            <Link to="/StarshipsList">return</Link>
        </div>
    )
}