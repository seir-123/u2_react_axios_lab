import { useState, useEffect } from 'react'
import  axios  from 'axios'
import { STARSHIPS_URL } from '../globals'


export default function StarshipsList () {
    const [starships, setStarships] = useState([])

    useEffect(() => {
      const getStarships = async () => {
        const response = await axios.get(`${STARSHIPS_URL}`)
        console.log(response.data.results)
        setStarships(response.data.results)
      }
  
      getStarships()
    }, [])
    console.log (starships)
    return (
        <div className="grid" id="starships">
            {
                starships.map((starship) => (
                    <div key={starship.name} className="card">
                        <h2>{starship.name}</h2>
                        <h3>{starship.manufacturer}</h3>
                    </div>
                ))
            }
        </div>
    )
}