import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom' 

const PlanetsPage = (props) => {
  console.log(props.planets)
  const [planets, setPlanets] = useState('')
    
  let { index } = useParams()
  
  useEffect(() => {
    let selectedPlanet = props.planets[index];
      setPlanets(selectedPlanet)
  }, [props.planets, index])

  return planets ? (
    <div>
    <Link to="/Planets"><button>Back</button></Link>
    <div><img style={{maxHeight: '20vmin', maxWidth: '20vmin'}} src="https://pluspng.com/img-png/png-star-wars-star-wars-logo-png-1600.png"/></div>
    <div className="detail">
      <div className="detail-header">
      <h1 style={{fontSize: '4.5vmin', fontFamily: 'Verdana', color: 'aliceblue', textShadow: '0 0 10px #fff'}}>{planets.name}</h1>
        <div style={{minWidth: '30vmin', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <h3><span style={{textDecoration: 'underline'}}>Terrain:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{planets.terrain}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Climate:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{planets.climate}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Gravity:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{planets.gravity}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Surface Water:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{planets.surface_water}</span></h3>
        </div>  
      </div>
      <div className="info-wrapper">
        <h4 style={{color: 'purple', fontSize: '3vmin'}}>Population: <span style={{fontSize: '4vmin',textShadow: '0 0 3px gray'}}>{planets.population}</span></h4>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        </div>
      </div>
      </div>
    </div>
  ) : <h1 className='loading'> Loading . . . </h1>;
}

export default PlanetsPage
