import { Link, useNavigate} from 'react-router-dom'


export default function StarshipsList (props) {
    let navigate = useNavigate()
    const showStarship = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
        <Link to='/'>Home</Link>
        <div className='grid' id='starships'>
            {props.starships.map((starship, i) =>
            <div className='card'
            onClick={() => showStarship(i)}
            key={starship.name} >
            <h3>{starship.model}</h3>
            <h3>{starship.manufacturer}</h3>
            <h2>{starship.cost_in_credits}</h2>
          </div>
            )}
        </div>
        
    </div>
    )
}
  

   
