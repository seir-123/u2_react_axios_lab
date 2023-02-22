import React from "react";
import { Link } from 'react-router-dom'

function LandingPage() {
    return(
        <div>
            <h1>Star Wars API</h1>
            <p>Click below to see a list of Star Wars Information</p>
            <Link to="/StarshipsList">
                <button className="mybutton">See Starships</button>
                </Link>
                <Link to="/PlanetsList">
                    <button className="mybutton">See Planets</button>
                </Link>
                <Link to="/CharactersList">
                    <button className="mybutton">See Characters</button>
                </Link>
        </div>
    )
}

export default LandingPage;

