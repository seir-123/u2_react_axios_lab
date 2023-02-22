const PlanetsList = (props) => {
  return (
    <div>
      <h3>Planets List</h3>
      {
        props.planets.map((planet) => (
          <div key={planet.name} className='planet-card' >
            <p>{planet.name}</p>
          </div>

        )
        )
      }
    </div>
  )
}

export default PlanetsList