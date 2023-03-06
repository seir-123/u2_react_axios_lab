import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const Speciespage = (props) => {
 
const [species, showSpecies] = useState("")

let {index} = useParams()

useEffect(() => {
  let speciesSelection = props.species[index]

  showSpecies(speciesSelection)
})


return (
    <div className="species-detail">
      <h1>{species.name}</h1>
      <h1>{species.classification}</h1>
      <h1>{species.designation}</h1>    
    
      <button><Link to ="/Species">Back</Link></button>
    </div>




  )
}

export default Speciespage