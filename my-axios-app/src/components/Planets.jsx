export default function Planets ({planets})
 

{
    return (
        <div>
        {planets.map((planet) => (
            <div key={planet.name}>Planet:{planet.name}</div>
        ))}
    
          </div>
          )
         
        }