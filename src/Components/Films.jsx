import { Link, useNavigate } from 'react-router-dom'

export default function Films(props){

    let navigate = useNavigate()
    const showFilm = (index) => {
        navigate(`${index}`)
    }
    return (
        <div>
            <Link to="/"><button>Back</button></Link>
            <div><img style={{maxHeight: '20vmin', maxWidth: '20vmin'}} src="https://pluspng.com/img-png/png-star-wars-star-wars-logo-png-1600.png"/></div>
        <div className="grid">
            {
                props.films.map((film, index)=> (
                    <div onClick={()=>{showFilm(index)}} key={film.title} className="card">
                        <h2>{film.title}</h2>
                    </div>
                    )
                )
            }
       
        </div>
        </div>
    )
}