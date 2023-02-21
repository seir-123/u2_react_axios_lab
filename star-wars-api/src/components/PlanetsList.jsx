export default function PlanetsList(props) {
    console.log(props.planets)
    return (
        <div className="grid">
            {
                props.planets.map((planet) => (
                    <div key={planet.id} className="card">
                        <h3>{planet.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}