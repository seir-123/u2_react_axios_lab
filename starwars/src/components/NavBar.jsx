import { Link } from 'react-router-dom'
export default function NavBar(){

    return(
        <div id ="nav">
            <Link to="/"><button>Home</button></Link>
            <Link to="/Starships"><button>Starships</button></Link>
            <Link to="/Planets"><button>Planets</button></Link>
             <Link to="/Characters"><button>Characters</button></Link>
        </div>
    )
}
