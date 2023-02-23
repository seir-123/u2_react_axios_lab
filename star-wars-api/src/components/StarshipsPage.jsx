import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function StarshipsPage (props) {

    const [starship, setStarship] = useState('')

    let { name } = useParams()

    useEffect(() => {
        let selectedStarship = props.starships.find(
            (starship) => starship.name === toString(name)
        )
        setStarship(selectedStarship)
    }, [props.starships, name])

    console.log(props.starships)
    
        return starship ? (
            <div className="detail">
              <div className="detail-header">
                
        
                  <h1>{starship.name}</h1>
                  
                
                        
                
              </div>
              {/* <Link to="/games" className="back-btn">
                  <button>
                  Back 
                  </button>
              </Link> */}
            </div>
          ) : <h1>Preparing Hyperdrive ... Stand by</h1>; 
        
        
        
        
        
        // <div className="detail">
        //     <div className="detail-header">
        //         <h2>{starship.model}</h2>
        //         <h3>Manufacturer: {starship.manufacturer}</h3>
        //         <h3>Class: {starship.starship_class}</h3>
        //         <h3>Cost in Credits:{starship.cost}</h3>
        //         <h3>Maximum Speed in Atmosphere: {starship.max_atmosphering_speed}</h3>
        //         <h3>Manufacturer: {starship.manufacturer}</h3>
        //         <h3>Hyperdrive Rating: {starship.hyperdrive_rating}</h3>
        //         <h3>Manufacturer: {starship.manufacturer}</h3>


        //     </div>
        // </div>

    

}