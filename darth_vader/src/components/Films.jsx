import { Link, useNavigate} from 'react-router-dom'


export default function Films (props) {
    let navigate = useNavigate()
    const showFilms = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
        <Link to='/'>Home</Link>
        <div className='grid'>
            {props.films.map((film, index) =>
            <div className='card'
            onClick={() => showFilms(index)}
            key={film.title} 
            >
            
            </div>
            )}
        </div>
        
    </div>
    )

            }   