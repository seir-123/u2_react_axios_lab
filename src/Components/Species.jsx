import { Link, useNavigate } from "react-router-dom"


const Species = (props) => {

  let navigate = useNavigate()


  const showSpecies = (index) => {
    navigate(`${index}`)
  }



  return (
    <div className="grid">
      {props.species.map((speciess, i) => (
        <div className="species-key" onClick={() => showSpecies(i)} key={i}>
          <Link to={'/species/${species.index}'}></Link>
                <h3>{speciess.name}</h3>
                <h3>{speciess.classification}</h3>
        </div>
      ))}
    </div>
  );
}

export default Species