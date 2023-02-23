import { Route, Routes } from "react-router-dom";
import Starships from "./Starships";
import Home from "./Home";
import Planets from "./Planets";
import Characters from "./Characters";
import StarshipsPage from "./StarshipsPage";
import { useState, useEffect } from 'react'


const Main = () => {

    const [starships, setStarships] = useState ([])

    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/starships" element={<Starships starships={starships} setStarships={setStarships}/>}/>
                <Route path="/starships/:name" element={<StarshipsPage starships={starships} setStarships={setStarships}/>}/>
                <Route path="/planets" element={<Planets/>}/>
                <Route path="/characters" element={<Characters/>}/>
                
            </Routes>
        </div>
    )

}

export default Main