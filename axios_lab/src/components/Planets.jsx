import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

export default function Planets(props){
    // console.log(props)

    const [planet, setPlanet] = useState("")
    let { index } = useParams();

    useEffect(() => {

        let selectedPlanet = props.planet[index]
        setPlanet(selectedPlanet)
    }, [props.planet, index])
        
    if (props && props.planet){

        return planet (

            <div className="planetsContainer">       
                {
                props.planet.map((planet) => (
                    <div key={planet.id} className="planetCard">
                        <h4 className="labels">NAME</h4>
                        <h2 className="resultsLarge">{planet.name}</h2>
    
                        <h4 className="labels">MODEL</h4>
                        <h3 className="resultsSmall">{planet.model}</h3>
                        <h4 className="labels">MANUFACTURER</h4>
                        <h3 className="resultsSmall">{planet.manufacturer}</h3>
                        <h4 className="labels">CREW</h4>
                        <h3 className="resultsSmall">{planet.crew}</h3>
                        <h4 className="labels">PASSENGERS</h4>
                        <h3 className="resultsSmall">{planet.name}</h3>
    
                        <h2 className="resultsLarge"><span>$</span>{planet.model}</h2>
                    </div>
                ))}
            </div>
        )}
        else {
            return <h2>Loading</h2>
        }
    }
