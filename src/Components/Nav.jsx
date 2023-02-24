import { Link } from 'react-router-dom';
import StarshipsList from "./Starship";
import People from './People'
import Planets from './Planets'
import Species from './Species'
import Vehicles from './Vehicles'
import Films from './Films'

export default function Nav(){
    return (
        <div className="Nav">
        <Link to="/"><button>Home</button></Link>
        <Link to="/People" element={<People/>}><button>People</button></Link>
        <Link to="/Planets"element={<Planets/>}><button>Planets</button></Link>
        <Link to="/Vehicles"element={<Vehicles/>}><button>Vehicles</button></Link>
        <Link to="/Films"element={<Films/>}><button>Films</button></Link>
        <Link to="/Starships"element={<StarshipsList/>}><button>Starships</button></Link>
        <Link to="/Species"element={<Species/>}><button>Species</button></Link>
        </div>
    

    )
}