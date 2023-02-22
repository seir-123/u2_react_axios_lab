import { useNavigate } from 'react-router-dom'

export default function Starships(props){
  let navigate = useNavigate()
  const showShip = (index)=>{
    navigate(`${index}`)
  }

  return(
   
    <div className = "grid">
    {
    props.results.map((ship, index) => (
        <div key = {index} className ="card" onClick={() => showShip(index)} >
            <h3>{ship.name}</h3>
        </div>
        ))
    }
</div>
  )
}