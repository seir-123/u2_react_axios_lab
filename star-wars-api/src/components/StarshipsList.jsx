

export default function StarshipsList (props) {

    console.log(props.starships)
    return (
     
    <div className="fullContainer">
        <h2 className="title">List of Starships</h2>
        <div className="listContainer">
            {
                props.starships.map((starship) => (
                    <div key={starship.name} className="item">
                        <h3>{starship.name}</h3>
                        
                    </div>
                ))
            }
        </div>
    </div>    
    )
}