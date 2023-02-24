import { Link, useNavigate } from 'react-router-dom'

export default function People(props){
    let navigate = useNavigate()
    const showPerson = (index) => {
      navigate(`${index}`)
    }
    return (
        <div>
            <Link to="/"><button>Back</button></Link>
            <div><img style={{maxHeight: '20vmin', maxWidth: '20vmin'}} src="https://pluspng.com/img-png/png-star-wars-star-wars-logo-png-1600.png"/></div>
        <div className="grid">
            {
                props.people.map((char, index)=> (
                    <div onClick={()=>showPerson(index)} key={index} className="card">
                        <h2>{char.name}</h2>
                    </div>
                    )
                )
            }
        </div></div>
    )
}