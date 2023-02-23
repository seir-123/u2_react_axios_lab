import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ShipDetails = (props) => {
  const [ship, setShip] = useState("");
  let { index } = useParams();
  useEffect(() => {
    let selectedShip = props.starShips[index] 
    setShip(selectedShip)
  }, []);
  console.log(useParams())
  return ship ? (
    <div className="details-grid">
      <div className="card">
        <h3>{ship.name}</h3>
      </div>
    </div>
  ) : (
    <h1>Loading, please wait...</h1>
  );
};
export default ShipDetails;