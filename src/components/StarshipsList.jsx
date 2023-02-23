import { BASE_URL } from "../globals"
import { useEffect, useState } from 'react'

const StarshipsList = (props) => {

  const [starshipsList, setStarshipsList] = useState([])

    useEffect(() => {
      setStarshipsList(BASE_URL)
      console.log(starshipsList)
    }, [])




  return (
    <div className="starships"> 

    <h1>List of Starships</h1>
      {
        props.starships.map((starship) => (
          <div key={starship.id} classname="obiwan">
            
          </div>
        ))
      }
    </div>
  )
}
export default StarshipsList