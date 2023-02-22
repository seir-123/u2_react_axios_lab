const StarshipsList = (props) => {
  return (
    <div className="grid">
      <h1>test</h1>
      {props.starships.map((starship) => (
        <div key={starship.name} className="card">
                <h3>{starship.name}</h3>
                <h3>{starship.manufacturer}</h3>
        </div>
      ))}
    </div>
  );
}

export default StarshipsList