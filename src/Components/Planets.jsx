const Planets = (props) => {
  return  (
    <div className="grid">
      {props.planets.map((planet) => (
        <div key={planet.name} className="yolo">
                <h3>{planet.name}</h3>
                <h3>{planet.climate}</h3>
                <h3>{planet.terrain}</h3>
        </div>
      ))}
    </div>
  );
}


export default Planets