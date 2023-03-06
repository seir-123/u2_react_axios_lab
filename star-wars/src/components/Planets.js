import { Link } from "react-router-dom"

export default function Planet(props) {
    return (
        <div>
            {
                props.planets.map((planet) => (
                    <div key={planet.name} className='planet card'>
                        <Link to={`/planets/${planet.name}`} onClick={() => props.getselplanet(planet.url)}>{planet.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}