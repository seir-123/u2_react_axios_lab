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
            <div key={index} className='card'
            onClick={() => showFilms(index)} >
            <h2>{film.title}</h2>
            </div>
            )}
        </div>
        
    </div>
    )

            }   