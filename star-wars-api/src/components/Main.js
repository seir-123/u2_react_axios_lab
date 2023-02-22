import { Route, Routes } from "react-router-dom";
import Starships from "./Starships";
import Home from "./Home";
import Planets from "./Planets";
import Characters from "./Characters";

const Main = () => {



    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/starships" element={<Starships/>}/>
                <Route path="/planets" element={<Planets/>}/>
                <Route path="/characters" element={<Characters/>}/>
            </Routes>
        </div>
    )

}

export default Main