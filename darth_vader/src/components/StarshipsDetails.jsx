import React from "react"
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'

export default function StarshipsDetails (props) {
    let { index } = useParams()
    const [starship, setStarship] = useState('')


    useEffect(() => {
        let selectedStarship = props.starships[index]
        setStarship(selectedStarship)
    }, [props.starships, index])

    return (
        <div className='Details'>
            <h1>{starship.name}</h1>
            <h3></h3>
        
        
    </div>
    )
}