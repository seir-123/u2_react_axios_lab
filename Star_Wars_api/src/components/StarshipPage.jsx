import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const StarshipPage = (props) => {
    const [starship, setStarship] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getStarship = async () => {
            let response = await axios.get(`https://swapi.dev/api/starships/${id}/`)
            setStarship(response.data)
            console.log(response)
        }
        getStarship()
    }, [])

    if (starships.length == 0) {
        return <h3>Loading...</h3>
    } else {
        return (
            <div className="details-page">
                <h1>{starship.name}</h1>
                <Link to="/starships">
                    <button className="details-btn">Back</button>
                </Link>
            </div>
        )
    }
}
export default StarshipPage 