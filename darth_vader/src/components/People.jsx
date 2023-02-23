import { Link, useNavigate} from 'react-router-dom'


export default function People (props) {
    let navigate = useNavigate()
    const showPeople = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
        <Link to='/'>Home</Link>
        <div className='grid' id='people'>
            {props.people.map((people, i) =>
            <div className='card'
            onClick={() => showPeople(i)}
            key={people.name} 
            >
            
            </div>
            )}
        </div>
        
    </div>
    )
}