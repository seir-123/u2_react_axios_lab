import { URL_PATH } from '../globals'

export default function StarshipsList (props) {
  

    return (
        <div className='grid'>
            {
                props.starships.map((starship) => (
                    <div key={starship.id} className='card'>
                        <h3>{starship.name}</h3>
                        <h2>{starship.manufacturer}</h2>
                    </div>    
                ))
            }
        </div>
    )
        
     

}