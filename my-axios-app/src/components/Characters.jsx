export default function Characters ({characters})
 

{
    return (
        <div>
        {characters.map((character) => (
            <div key={character.name}>Pilot:{character.name}</div>
        ))}
    
          </div>
          )
         
        }