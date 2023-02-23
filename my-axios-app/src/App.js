import StarshipsList from './components/StarshipsList';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Main from './components/Main'
import './App.css';
import './index'
import { BASE_URL } from './globals';

function App() {
  const [starships, setStarships] = useState ([])
  
useEffect(() => {
  const getStarships = async () => {
    const response = await axios.get(`${BASE_URL}`)
    //console.log(response)
    setStarships(response.data.results)
    //console.log(starships)
  }
  getStarships()
}, [])

  return (
    <div className="App">
{/* <Nav /> */}
<Main />
<StarshipsList starships={starships}/>
   </div>
  );
}

export default App;
