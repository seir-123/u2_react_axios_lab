import { useState, useEffect } from 'react'
import axios from 'axios'


const StarshipsList = () => {
    const [starShips, setStarShips] = useState()
    useEffect(() => {
        const fetchShips = async () => {
            try {
              const response = await axios.get(`https://swapi.dev/api/starships`)
              console.log(response.data.results)
              setStarShips(response.data.results)
            } catch (err) {
                console.log(err)
            }
          };
          fetchShips();
    }, [])
        
    return(
        <div>
            <h1>Ship Names</h1>
            {starShips?.map((s) => ( //
                 <p>{s.name}</p>
            ))}
        </div>
    )
}

export default StarshipsList