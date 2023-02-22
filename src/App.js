import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import StarshipsList from "./components/StarshipsList";
import PlanetsList from "./components/PlanetsList";
import CharactersList from "./components/CharactersList";

// import axios from "axios";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/StarshipsList" element={<StarshipsList />} />
        <Route path="/PlanetsList" element={<PlanetsList />} />
        <Route path="/CharactersList" element={<CharactersList />} />
      </Routes>
    </div>
  );
}

export default App;
