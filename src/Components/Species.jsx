const Species = (props) => {
  return (
    <div className="grid">
      {props.species.map((spec) => (
        <div key={spec.name} className="species-key">
                <h3>{spec.name}</h3>
                <h3>{spec.classification}</h3>
        </div>
      ))}
    </div>
  );
}

export default Species