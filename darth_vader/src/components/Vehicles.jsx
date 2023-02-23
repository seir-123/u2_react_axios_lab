import { Link, useNavigate} from 'react-router-dom'


export default function Vehicles (props) {
    let navigate = useNavigate()
    const showVehicle = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
        <Link to='/'>Home</Link>
        <div className='grid' id='vehicles'>
            {props.vehicles.map((vehicle, i) =>
            <div className='card'
            onClick={() => showVehicle(i)}
            key={vehicle.title} 
            >
            <h3>{vehicle.name}</h3>
            <h4>{vehicle.manufacturer}</h4>
            </div>
            )}
        </div>
        
    </div>
    )
}