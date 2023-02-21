import Films from './Films'
import People from './People'
import Planets from './Planets'
import Species from './Species'
import Starships from './Starships'
import Vehicles from './Vehicles'
import { Route, Routes } from 'react-router-dom'


export default function LandingPage () {

    return (
        <div className='routes-container'>

            <Routes>
              <Route path='/Films' element={<Films/>} />
              <Route path='/People' element={<People/>} />
              <Route path='/Planets' element={<Planets/>} />
              <Route path='/Species' element={<Species/>} />
              <Route path='/Starships' element={<Starships/>} />
              <Route path='/Vehicles' element={<Vehicles/>} />

            </Routes>


        </div>
    )
}