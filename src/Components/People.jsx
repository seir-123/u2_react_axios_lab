import { Link } from 'react-router-dom'

export default function People(props){

    return (
        <div>
            <Link to="/"><button>Back</button></Link>
        <div className="grid">
            {
                props.people.map((char)=> (
                    <div key={char.name} className="card">
                        <h2>{char.name}</h2>
                    </div>
                    )
                )
            }
        </div></div>
    )
}