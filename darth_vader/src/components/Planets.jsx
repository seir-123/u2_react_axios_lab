import { Link, useNavigate} from 'react-router-dom'


export default function Planets (props) {
    let navigate = useNavigate()
    
    const showPlanets = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
        <Link to='/'>Home</Link>
        <div className='grid' id='planets'>
            {props.planets.map((planet, index) =>
            <div key={index} className='card'
            onClick={() => showPlanets(index)} >
            <h3>{planet.name}</h3>
        </div>
            )}
        </div>
        
    </div>
    )
}