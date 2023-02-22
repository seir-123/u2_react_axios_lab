import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function PlanetPage(props){
    const [planet, setPlanet] = useState("")
    let { index } = useParams();
    useEffect(()=>{
        let selectedPlanet = props.data[index]
        setPlanet(selectedPlanet)
    }, [props.data, index])

    return planet ?
    ( <div>
            <Link to ="/Planets"><button>Back to Planets</button></Link>
            <h3>Name:</h3><p>{planet.name}</p> 
            <h3>Rotation Period:</h3><p>{planet.rotation_period}</p> 
            <h3>Orbital Period: </h3><p>{planet.orbital_period}</p> 
            <h4>Diameter </h4><p>{planet.diameter}</p> 
            <h4>Climate </h4><p>{planet.climate}</p> 
            <h4>Terrain </h4><p>{planet.terrain}</p> 
            <h4>Population </h4><p>{planet.population}</p> 


      </div>
    ) :  <h3>No planet found</h3>; 
  }

