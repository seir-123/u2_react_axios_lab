import { useNavigate } from 'react-router-dom'


export default function StarshipsList (props) {
    let navigate = useNavigate()
    const showStarship = (index) => {
        navigate(`${index}`)
    }

    return (
        <div className="grid">
            {
                props.starships.map((starship, index) => (
                    <div key={index} className="card" onClick={() => showStarship(index)}>
                        <h3>{starship.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}
  

   
