import { Link, useNavigate } from 'react-router-dom'



const Planets = (props) => {

let navigate = useNavigate()


const showPlanet = (index) => {
  navigate(`${index}`)
}









  return  (
    <div className="planet-grid">
      {props.planets.map((planet, i) => (
        <div className="yolo" onClick={() => showPlanet(i)} key={i}>
          <Link to={'/planets/${planets.index}'}></Link>
                <h3 className="card">{planet.name}</h3>
                
        </div>
      ))}
    </div>
  )
}


export default Planets