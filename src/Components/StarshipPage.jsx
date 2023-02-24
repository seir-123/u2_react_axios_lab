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
    <div><img style={{maxHeight: '20vmin', maxWidth: '20vmin'}} src="https://pluspng.com/img-png/png-star-wars-star-wars-logo-png-1600.png"/></div>
    <div className="detail">
      <div className="detail-header">
      <h1 style={{fontSize: '4.5vmin', fontFamily: 'Verdana', color: 'aliceblue', textShadow: '0 0 10px #fff'}}>{starship.name}</h1>
        <div style={{minWidth: '30vmin', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3><span style={{textDecoration: 'underline'}}>Model:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{starship.model}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Manufacturer:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{starship.manufacturer}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Capacity:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{starship.cargo_capacity}</span></h3>
        </div>  
      </div>
      <div className="info-wrapper">
        <h4 style={{color: 'green', fontFamily: 'Star Wars', fontSize: '3vmin'}}>Price: <span style={{fontSize: '4vmin',textShadow: '0 0 3px lightgreen'}}>{starship.cost_in_credits} Credits</span></h4>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        </div>
      </div>
      </div>
    </div>
  ) : <h1 className='loading'> Loading . . . </h1>;
}

export default StarshipPage
