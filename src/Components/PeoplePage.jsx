import { useEffect, useState } from 'react' 
import { useParams, Link } from 'react-router-dom'

const PeoplePage = (props) => {
  console.log(props)
  const [people, setPeople] = useState('')
    
  let { index } = useParams()
  
  useEffect(() => {
    let selectedPerson = props.people[index];
      setPeople(selectedPerson)
  }, [props.people, index])

  return people ? (
    <div>
    <Link to="/People"><button>Back</button></Link>
    <div><img style={{maxHeight: '20vmin', maxWidth: '20vmin'}} src="https://pluspng.com/img-png/png-star-wars-star-wars-logo-png-1600.png"/></div>
    <div className="detail">
      <div className="detail-header">
      <h1 style={{fontSize: '4.5vmin', fontFamily: 'Verdana', color: 'aliceblue', textShadow: '0 0 10px #fff'}}>{people.name}</h1>
        <div style={{minWidth: '30vmin', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3><span style={{textDecoration: 'underline'}}>Birth:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{people.birth_year}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Height:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{people.height} cm</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Mass:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{people.mass} kg</span></h3>
        </div>  
      </div>
      <div className="info-wrapper">
        <h4 style={{color: 'royalblue', fontSize: '3vmin'}}>Gender: <span style={{fontSize: '4vmin',textShadow: '0 0 3px gray'}}>{people.gender} </span></h4>
        <h4 style={{color: 'royalblue', fontSize: '3vmin'}}>Eye Color: <span style={{fontSize: '4vmin',textShadow: '0 0 3px gray'}}>{people.eye_color} </span></h4>
        <h4 style={{color: 'royalblue', fontSize: '3vmin'}}>Hair Color: <span style={{fontSize: '4vmin',textShadow: '0 0 3px gray'}}>{people.hair_color} </span></h4>
        <h4 style={{color: 'royalblue', fontSize: '3vmin'}}>Skin Color: <span style={{fontSize: '4vmin',textShadow: '0 0 3px gray'}}>{people.skin_color} </span></h4>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        </div>
      </div>
      </div>
    </div>
  ) : <h1 className='loading'> Loading . . . </h1>;
}

export default PeoplePage
