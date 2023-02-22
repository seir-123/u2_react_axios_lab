// import Map from './Map';
import { useNavigate } from 'react-router-dom'
export default function Planets(props){
    let navigate = useNavigate()
    const showPlanet = (index)=>{
      navigate(`${index}`)
    }
  
    return(

        <div className = "grid">
        {
        props.results.map((planet,index) => (
            <div key = {index} className ="card" onClick={() => showPlanet(index)}>
                <h3>{planet.name}</h3>
            </div>
            ))
        }
    </div>
      )
    }

