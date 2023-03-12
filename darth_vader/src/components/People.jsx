import React from 'react'
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
            {props.people.map((people, index) => (
            <div key={index} className='card'
            onClick={() => showPeople(index)} >
            <h3>{people.name}</h3> 
            
            
            </div>
            ))
        }
        </div>
        
    </div>
    )
}