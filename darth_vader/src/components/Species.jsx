import React from 'react'
import { Link, useNavigate} from 'react-router-dom'


export default function Species (props) {
    let navigate = useNavigate()
    
    const showSpecies = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
        <Link to='/'>Home</Link>
        <div className='grid' id='species'>
            {props.planets.map((species, index) =>
            <div key={index} className='card'
            onClick={() => showSpecies(index)} >
            <h3>{species.title}</h3>
        </div>
            )}
        </div>
        
    </div>
    )
}