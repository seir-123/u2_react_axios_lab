
import { useLocation } from "react-router-dom"


const FilmPage = (props) => {

//setting our state for data to be pulled

let location = useLocation()
let film = location.state.film



return(
  <div className="starship">
    <h1>{film.title}</h1>
    
  </div>
)
}

export default FilmPage