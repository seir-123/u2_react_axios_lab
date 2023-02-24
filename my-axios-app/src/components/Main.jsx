import { Link } from 'react-router-dom'



export default function Main ()

{
    return (
        <div>
      <h1>Hello World</h1>
    <nav className='navbar'>
      <Link to='./StarshipsList'>
        Starship List
      </Link>
      
    </nav>
          </div>
          )
         
        }