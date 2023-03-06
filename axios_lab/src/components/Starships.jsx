import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

export default function Starships(props){
    // console.log(props)

    const [starship, setStarship] = useState("")
    let { index } = useParams();

    useEffect(() => {

        let selectedStarship = props.starship[index]
        setStarship(selectedStarship)
    }, [props.starship, index])
        
    if (props && props.starship){

        return starship (

            <div className="starshipsContainer">       
                {
                props.starship.map((starship) => (
                    <div key={starship.id} className="StarshipCard">
                        <h4 className="labels">NAME</h4>
                        <h2 className="resultsLarge">{starship.name}</h2>
    
                        <h4 className="labels">MODEL</h4>
                        <h3 className="resultsSmall">{starship.model}</h3>
                        <h4 className="labels">MANUFACTURER</h4>
                        <h3 className="resultsSmall">{starship.manufacturer}</h3>
                        <h4 className="labels">CREW</h4>
                        <h3 className="resultsSmall">{starship.crew}</h3>
                        <h4 className="labels">PASSENGERS</h4>
                        <h3 className="resultsSmall">{starship.name}</h3>
    
                        <h2 className="resultsLarge"><span>$</span>{starship.model}</h2>
                    </div>
                ))}
            </div>
        )}
        else {
            return <h2>Loading</h2>
        }
    }
