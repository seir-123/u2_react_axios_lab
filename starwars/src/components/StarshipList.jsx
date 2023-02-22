export default function StarshipList ({starShips}) {
    return (
        <div>
            {
                starShips.map((starShip, index) =>(
                       <div key={index}>
                        <h1> Model: {starShip.name}</h1>
                        <h4>Manufacturer: {starShip.manufacturer}</h4>
                        <h4>Length: {starShip.length}</h4>
                        <h4>Cost in credits: {starShip.cost_in_credits}</h4>
                        </div>    
                        
                        
                ))
            }
        </div>
    )
    }
   