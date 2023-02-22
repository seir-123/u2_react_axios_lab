export default function Planets ({planets}) {
    return (
        <div>
            {
                planets.map((planet, index) =>(
                       <div key={index}>
                            <h1>{planet.name}</h1>
                        </div>         
                ))
            }
        </div>
    )
    }