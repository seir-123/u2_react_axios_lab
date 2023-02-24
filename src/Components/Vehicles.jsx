import { Link } from 'react-router-dom'

export default function Vehicles(props){

    return (
        <div>
        <Link to="/"><button>Back</button></Link>
        <div className="grid">
            {
                props.vehicles.map((vehicle)=> (
                    <div key={vehicle.name} className="card">
                        <h2>{vehicle.name}</h2>
                    </div>
                    )
                )
            }
        </div></div>
    )
}