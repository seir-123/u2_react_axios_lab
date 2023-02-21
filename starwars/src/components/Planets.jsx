// import Map from './Map';
export default function Planets(props){
    return(

        <div className = "grid">
        {
        props.results.map((planet) => (
            <div key = {planet.id} className ="card">
                <h3>{planet.name}</h3>
            </div>
            ))
        }
    </div>
      )
    }

