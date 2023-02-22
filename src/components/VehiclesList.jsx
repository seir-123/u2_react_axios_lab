import { useState, useEffect } from 'react'
import  axios  from 'axios'
import { VEHICLES_URL } from '../globals'


export default function VehiclesList () {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
      const getVehicles = async () => {
        const response = await axios.get(`${VEHICLES_URL}`)
        console.log(response.data.results)
        setVehicles(response.data.results)
      }
  
      getVehicles()
    }, [])
    console.log (vehicles)
    return (
        <div className="grid" id="vehicles">
            {
                vehicles.map((vehicle) => (
                    <div key={vehicle.title} className="card">
                        <h2>{vehicle.name}</h2>
                        <h3>{vehicle.manufacturer}</h3>
                    </div>
                ))
            }
        </div>
    )
}