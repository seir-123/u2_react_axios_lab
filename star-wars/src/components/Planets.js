export default function Planets(props) {
    return (
        <div>
            {
                props.planets.map((planet) => (
                    <div key={planet.name} className='planets card'>
                        <h1>{planet.name}</h1>
                        <h3>Climate: {planet.climate}</h3>
                        <h3>Terrain: {planet.terrain}</h3>
                        <h3>Population: {planet.population}</h3>
                    </div>
                ))
            }
        </div>
    )
}