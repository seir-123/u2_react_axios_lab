import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";




const Starshippage = (props) => {

  const [ship, showShip] = useState("")


  let { index } = useParams()

  useEffect(() => {
    let shipSelection = props.starships.find((ship) => ship.index === parseInt(index))
    showShip(shipSelection)
  })


return (
  <div className="detail">
    <h1>{ship.name}</h1>
    <button><Link to="/StarshipsList">Back</Link></button>
  </div>
  ) : Null <h1 className="loading">Loading. . .</h1>
}
export default Starshippage