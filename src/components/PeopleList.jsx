import { Link, useNavigate } from "react-router-dom";

export default function PeopleList(props) {
  let navigate = useNavigate();
  const showPeople = (index) => {
    navigate(`${index}`);
  };
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="grid" id="people">
        {props.people.map((person, i) => (
          <div key={person.name} onClick={() => showPeople(i)} className="card">
            <h2>{person.name}</h2>
            <h3>{person.birth_year}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
