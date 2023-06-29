import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import StarshipsList from './StarshipList';
import FilmList from './FilmList';
import PlanetList from './PlanetList';
import CharacterList from './CharacterList';
import StarshipPage from './StarshipPage';
import FilmPage from './FilmPage';
import CharacterPage from './CharacterPage';
import PlanetPage from './PlanetPage';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipsList />} />
        <Route path="/starships/:name" element={<StarshipPage />} />
        <Route path="/films" element={<FilmList />} />
        <Route path="/films/:name" element={<FilmPage />} />
        <Route path="/planets" element={<PlanetList />} />
        <Route path="/planets/:name" element={<PlanetPage />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:name" element={<CharacterPage />} />
      </Routes>
    </div>
  );
};

export default Main;
