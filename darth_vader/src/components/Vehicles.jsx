import React from 'react'
import { useNavigate} from 'react-router-dom'



export default function Vehicles (props) {
    let navigate = useNavigate()
    const showVehicle = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
     
        <div className='grid' id='vehicles'>
            {props.vehicles.map((vehicle, index) =>
            <div key={index} className='card'
            onClick={() => showVehicle(index)} >
            <h3>{vehicle.title}</h3>
            <h3>{vehicle.name}</h3>
            <h4>{vehicle.manufacturer}</h4>
            </div>
            )}
        </div>
        
    </div>
    )
}