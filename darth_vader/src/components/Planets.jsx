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
            {props.planets.map((planet, i) =>
            <div className='card'
            onClick={() => showPlanets(i)}
            key={planet.title} 
            >
            
            </div>
            )}
        </div>
        
    </div>
    )
}