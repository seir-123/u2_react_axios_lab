import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Planetpage = (props) => {

const [planet, showPlanet] = useState("")


let {index} = useParams()

useEffect (() => {
  let planetSelection = props.planets[index]

  showPlanet(planetSelection)
})


return (
  <div className="planet-detail">
    <h1>{planet.name}</h1>
    <h1>{planet.terrain}</h1>
    <h1>{planet.climate}</h1>


    <button><Link to ="/Planets">Back</Link></button>


  </div>
)



}
export default Planetpage


















