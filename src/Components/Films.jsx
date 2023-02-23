import { Link } from 'react-router-dom'

export default function Films(props){
console.log(props)
    return (
        <div>
            <Link to="/">Back</Link>
        <div className="grid">
            {
                props.films.map((film)=> (
                    <div key={film.title} className="card">
                        <h2>{film.title}</h2>
                    </div>
                    )
                )
            }
        </div>
        </div>
    )
}