const Planets = (props) => {
  return  (
    <div className="planet-grid">
      {props.planets.map((planet) => (
        <div key={planet.name} className="yolo">
                <h3 className="card">{planet.name}</h3>
                <h3 className="card">{planet.climate}</h3>
                <h3 className="card">{planet.terrain}</h3>
        </div>
      ))}
    </div>
  );
}


export default Planets