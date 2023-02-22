import './App.css';
import Main from './components/Main'
import StarshipsList from './components/StarshipsList'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/StarshipsList" element={<StarshipsList />}/>
      </Routes>
    </div>
  );
}

export default App;
