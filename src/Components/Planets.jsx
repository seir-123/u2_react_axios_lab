import { Link, useNavigate } from 'react-router-dom'

export default function Planets(props){    
    let navigate = useNavigate()
    const showPlanet = (index) =>{
    navigate(`${index}`)
    }
    return (
        <div>
            <Link to="/"><button>Back</button></Link>
            <div><img style={{maxHeight: '20vmin', maxWidth: '20vmin'}} src="https://pluspng.com/img-png/png-star-wars-star-wars-logo-png-1600.png"/></div>
        <div className="grid">
            {
                props.planets.map((planet, index)=> (
                    <div onClick={()=>{showPlanet(index)}}key={planet.name} className="card">
                        <h2>{planet.name}</h2>
                    </div>
                    )
                )
            }
        </div>
        </div>
    )
}

