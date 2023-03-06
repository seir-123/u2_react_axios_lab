import { Link, useNavigate } from "react-router-dom"


const People = (props) => {


let navigate = useNavigate()


const showPeople = (index) => {
  navigate(`${index}`)
}






  return (
    <div className="grid">
      {props.people.map((person, i) => (
        <div className="person-key" onClick={() => showPeople(i)} key={i}>
          <Link to={'/people/${person.index}'}></Link>
                <h3>{person.name}</h3>
                
        </div>
      ))}
    </div>
  );
}
export default People