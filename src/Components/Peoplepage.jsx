import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Peoplepage = (props) => {

const [person, showPerson] = useState("")


let {index} = useParams()

useEffect(() => {
  let personSelection = props.people[index]

  showPerson(personSelection)
})


return (
  <div className="person-detail">
    <h1>{person.name}</h1>
    <h1>{person.mass}</h1>
    

    <button><Link to="/People">Back</Link></button>


  </div>
)
}
export default Peoplepage


















