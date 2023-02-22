export default function PlanetsList (props) {

    console.log(props.planets)
    return (
     
    <div className="fullContainer">
        <h2 className="title">List of Planets</h2>
        <div className="listContainer">
            {
                props.planets.map((planet) => (
                    <div key={planet.name} className="item">
                        <h3>{planet.name}</h3>
                        
                    </div>
                ))
            }
        </div>
    </div>    
    )
}