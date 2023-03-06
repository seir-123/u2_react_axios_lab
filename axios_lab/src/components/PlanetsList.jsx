import { useNavigate } from "react-router-dom"

export default function PlanetsList(props){

    let navigate = useNavigate()
    const showPlanet = (index) => {
        navigate(`${index}`)
    }

    return(
        <div className="planetsListContainer">
            {
                props.results.map((planet, index) => (
                    <div className="shipCard" key= {index} onClick={() => showPlanet(index)}>
                        <h4>{planet.name}</h4>
                    </div>
                ))
            }
        </div>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////