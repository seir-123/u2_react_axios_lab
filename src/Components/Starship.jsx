import { Link, useNavigate } from 'react-router-dom'

export default function StarshipsList(props){
    let navigate = useNavigate()
    const showShip = (index) => {
      navigate(`${index}`)
    }

    return (
        <div>
            <Link to="/"><button>Back</button></Link>
            <div className="grid">
            {
                props.starships.map((ship, index)=> (
                    <div onClick={()=>showShip(index)} key={index} className="card">
                        <h2>{ship.name}</h2>
                    </div>
                    )
                )
            }
            </div>
        </div>
    )
}

