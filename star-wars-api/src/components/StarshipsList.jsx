import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function StarshipsList(props) {

    let navigate = useNavigate()

    const showShip = (starship) => {
        navigate(`${starship.id}`)
    }
    
    return (
        <div className="grid">
            {
                props.starships.map((starship) => (
                    <div key={starship.id} className="card" onClick={() => showShip(starship)}>
                        <h3>{starship.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}