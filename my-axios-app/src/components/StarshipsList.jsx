



export default function StarshipsList ({starships})
 

{
    return (
        <div>
        {starships.map((starship) => (
            <div key={starship.name}>Name:{starship.name}</div>
        ))}
    
          </div>
          )
         
        }