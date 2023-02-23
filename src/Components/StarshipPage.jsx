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
    <div className="detail">
        <Link to="/Starships"><button>Back</button></Link>
      <div className="detail-header">
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        </div>  
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        </div>
      </div>
    </div>
  ) : <h1 className='loading'> Loading . . . </h1>;
  // Ternary ^ is much more elegant compared to if/else. Need controlled truthy/falsey action on data.
}

export default StarshipPage





// Selectedstarship = props.starships[id]