import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const StarshipPage = (props) => {

  const [starship, setStarship] = useState('')
    
  let { index } = useParams()
  
  useEffect(() => {
    let selectedShip = props.starships[index];
      setStarship(selectedShip)
  }, [props.starships, index])

  return starship ? (
    <div>
    <Link to="/Starships"><button>Back</button></Link>
    <div className="detail">
      <div className="detail-header">
      <h1>{starship.name}</h1>
        <div style={{minWidth: '30em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3>Model: {starship.model}</h3>
          <h3>Manufacturer: {starship.manufacturer}</h3>
          <h3>Capacity: {starship.cargo_capacity}</h3>
        </div>  
      </div>
      <div className="info-wrapper">
        <h4 style={{color: 'green'}}>Price: {starship.cost_in_credits} Credits</h4>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        </div>
      </div>
      </div>
    </div>
  ) : <h1 className='loading'> Loading . . . </h1>;
  // Ternary ^ is much more elegant compared to if/else. Need controlled truthy/falsey action on data.
}

export default StarshipPage





// Selectedstarship = props.starships[id]