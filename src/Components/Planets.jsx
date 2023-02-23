import { Link } from 'react-router-dom'

export default function Planets(props){    

    return (
        <div>
            <Link to="/">Back</Link>
        <div className="grid">
            {
                props.planets.map((planet)=> (
                    <div key={planet.name} className="card">
                        <h2>{planet.name}</h2>
                    </div>
                    )
                )
            }
        </div>
        </div>
    )
}

