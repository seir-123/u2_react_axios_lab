import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const FilmsPage = (props) => {
console.log(props)
  const [films, setFilms] = useState('')
    
  let { index } = useParams()
  
  useEffect(() => {
    let selectedFilm = props.films[index];
      setFilms(selectedFilm)
  }, [props.films, index])

  return films ? (
    <div>
    <Link to="/Films"><button>Back</button></Link>
    <div><img style={{maxHeight: '20vmin', maxWidth: '20vmin'}} src="https://pluspng.com/img-png/png-star-wars-star-wars-logo-png-1600.png"/></div>
    <div className="detail">
      <div className="detail-header">
      <h1 style={{fontSize: '4.5vmin', fontFamily: 'Verdana', color: 'aliceblue', textShadow: '0 0 10px #fff'}}>{films.title}</h1>
        <div style={{minWidth: '30vmin', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3><span style={{textDecoration: 'underline'}}>Episode:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{films.episode_id}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Director:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{films.director}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Producer(s):</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{films.producer}</span></h3>
          <h3><span style={{textDecoration: 'underline'}}>Release Date:</span> <span style={{color: 'red', textShadow: '0 0 1px lightred'}}>{films.release_date}</span></h3>
        </div>  
      </div>
      <div className="info-wrapper">
        <h4 style={{color: 'gold', fontSize: '3vmin'}}>Plot: <span style={{fontSize: '4vmin',textShadow: '0 0 3px gray'}}>{films.opening_crawl}</span></h4>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        </div>
      </div>
      </div>
    </div>
  ) : <h1 className='loading'> Loading . . . </h1>;
}

export default FilmsPage
