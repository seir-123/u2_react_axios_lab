import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import StarshipsList from './StarshipList';
import FilmList from './FilmList';
import PlanetList from './PlanetList';
import CharacterList from './CharacterList';
import StarshipPage from './StarshipPage';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipsList />} />
        <Route path="/starships/:name" element={<StarshipPage />} />
        <Route path="/films" element={<FilmList />} />
        <Route path="/planets" element={<PlanetList />} />
        <Route path="/characters" element={<CharacterList />} />
      </Routes>
    </div>
  );
};

export default Main;
