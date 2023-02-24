import { Link } from 'react-router-dom'

export default function Species(props){

    return (
        <div>
            <Link to="/"><button>Back</button></Link>
        <div className="grid">
            {
                props.species.map((spec)=> (
                    <div key={spec.name} className="card">
                        <h2>{spec.name}</h2>
                    </div>
                    )
                )
            }
        </div>
        </div>
    )
}