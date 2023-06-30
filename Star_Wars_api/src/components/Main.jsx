import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Starship from './Starship'
import StarshipPage from './StarshipPage'
import Films from './Films'
import FilmsPage from './FilmsPage'


const Main = ()=> {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/starships" element={<Starship />}></Route>
        <Route path="/starships/:id" element={<StarshipPage />}></Route>
        <Route path="/films" element={<Films />}></Route>
        <Route path="/filmsPage" element={<FilmsPage />}></Route>
      </Routes>
    )
  }
  
  export default Main