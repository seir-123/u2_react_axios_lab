import { useLocation } from "react-router-dom"


const CharacterPage = () => {

//setting our state for data to be pulled

let location = useLocation()
let character = location.state.character



return(
  <div className="character">
    <h1>{character.name}</h1>
    
  </div>
)
}

export default CharacterPage