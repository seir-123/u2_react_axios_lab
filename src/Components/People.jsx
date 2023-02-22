const People = (props) => {
  return (
    <div className="grid">
      {props.people.map((person) => (
        <div key={person.name} className="person-key">
                <h3>{person.name}</h3>
                <h3>{person.mass}</h3>
        </div>
      ))}
    </div>
  );
}
export default People