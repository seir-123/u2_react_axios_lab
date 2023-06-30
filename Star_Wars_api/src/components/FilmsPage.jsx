import { Link, useParams } from "react-router-dom"
import { useSatate, useEffect } from "react"
import axios from "axios";

const FilmPage = (props) => {
    const [film, setFilm] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getFilm = async () => {
            let response = await axios.get(`https://swapi.dev/api/films/${id}/`)
            setFilm(response.data)
        }
        getFilm()
    }, [])

    if (film.length == 0) {
        return <h3>Loading...</h3>
    } else {
        return (
            <div className="details-page">
                <h1>{film.title}</h1>
                <Link to="/films">
                    <button className="details-btn">Back</button>
                </Link>
            </div>
        )
    }
}
export default FilmPage 