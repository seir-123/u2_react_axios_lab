import { useNavigate } from 'react-router-dom'



export default function StarshipsList ({starships})

  

{
  let navigate = useNavigate()
    const showStarship = (starship, index) => {
      console.log(starships)
      navigate(`/ships/${index}`)
    }
    return (
        <div>
        {starships.map((starship, index) => (
            <div className="" onClick={() => showStarship(starship, index)}
            key={starship.name}>Starship Name:{starship.name}
            </div>
        ))}
    
          </div>
          )
         
        }