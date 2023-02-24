import { Link, useNavigate } from 'react-router-dom'

export default function Species(props){
    let navigate = useNavigate()
    const showSpecies=(index)=>{
        navigate(`${index}`)
    }
    return (
        <div>
            <Link to="/"><button>Back</button></Link>
            <div><img style={{maxHeight: '20vmin', maxWidth: '20vmin'}} src="https://pluspng.com/img-png/png-star-wars-star-wars-logo-png-1600.png"/></div>
        <div className="grid">
            {
                props.species.map((spec, index)=> (
                    <div onClick={()=>showSpecies(index)} key={spec.name} className="card">
                        <h2>{spec.name}</h2>
                    </div>
                    )
                )
            }
        </div>
        </div>
    )
}