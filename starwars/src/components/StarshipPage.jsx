import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function StarshipPage(props){
    const [ship, setShip] = useState("")
    let { index } = useParams();
    useEffect(()=>{
        let selectedShip = props.data[index]
        setShip(selectedShip)
    }, [props.data, index])

    return ship ?
    ( <div>
             <Link to ="/Starships"><button>Back to Starships</button></Link>
            <h3>Name:</h3><p>{ship.name}</p> 
            <h3>Model:</h3><p>{ship.model}</p> 
            <h3>Manufacturer: </h3><p>{ship.manufacturer}</p> 
            <h3>Crew: </h3><p>{ship.crew}</p> <h3>Passengers </h3><p>{ship.name}</p> 

      </div>
    ) :  <h3>No ship found</h3>; 
  }

