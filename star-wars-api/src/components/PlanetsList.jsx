import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function PlanetsList(props) {
    
    let navigate = useNavigate()

    const showPlanet = (index) => {
        navigate(`${index}`)
    }

    return (
        <div className="grid">
            {
                props.planets.map((planet, index) => (
                    <div key={index} className="card" onClick={() => showPlanet(index)}>
                        <h3>{planet.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}