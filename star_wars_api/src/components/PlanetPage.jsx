import { useLocation } from "react-router-dom"


const PlanetPage = (props) => {

//setting our state for data to be pulled

let location = useLocation()
let planet = location.state.planet



return(
  <div className="planet">
    <h1>{planet.name}</h1>
    
  </div>
)
}

export default PlanetPage