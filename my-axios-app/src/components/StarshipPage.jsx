import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const StarshipPage = 

(props) => {

  let { id } = useParams()

  useEffect(() => {
    let selectedStarship = props.starships[id]
    
    setStarship(selectedStarship)
  }, [props.starships, id])

  const [starship, setStarship] = useState('')

  return starship ? (
    <div className="detail">
      <div className="detail-header">
        <img src={starship.img} alt={starship.name} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{starship.name}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          
        </div>
        <p></p>
      </div>
    </div>
  ) : null;
}

export default StarshipPage