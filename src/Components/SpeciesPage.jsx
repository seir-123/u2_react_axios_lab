import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const SpeciesPage = (props) => {
    console.log(props.species) 
  const [species, setSpecies] = useState('')
    
  let { index } = useParams()
  
  useEffect(() => {
    let selectedSpecies = props.species[index];
      setSpecies(selectedSpecies)
  }, [props.species, index])

  return species ? (
    <div>
    <Link to="/Species"><button>Back</button></Link>
    <div><img style={{maxHeight: '20vmin', maxWidth: '20vmin'}} src="https://pluspng.com/img-png/png-star-wars-star-wars-logo-png-1600.png"/></div>
    <div className="detail">
      <div className="detail-header">
      <h1 style={{fontSize: '4.5vmin', fontFamily: 'Verdana', color: 'aliceblue', textShadow: '0 0 10px #fff'}}>{species.name}</h1>
        <div style={{minWidth: '30vmin', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3><span style={{textDecoration: 'underline'}}>Classification:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{species.classification}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Designation:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{species.designation}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Language(s):</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{species.language}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Average Height:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{species.average_height}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Average Lifespan:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{species.average_lifespan}</span></h3>
        </div>  
      </div>
      <div className="info-wrapper">
        <h4 style={{color: 'tan', fontSize: '3vmin'}}>Eye Colors: <span style={{fontSize: '4vmin',textShadow: '0 0 3px lighttan'}}>{species.eye_colors}</span></h4>
        <h4 style={{color: 'tan', fontSize: '3vmin'}}>Skin Colors: <span style={{fontSize: '4vmin',textShadow: '0 0 3px lighttan'}}>{species.skin_colors}</span></h4>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        </div>
      </div>
      </div>
    </div>
  ) : <h1 className='loading'> Loading . . . </h1>;
}

export default SpeciesPage
