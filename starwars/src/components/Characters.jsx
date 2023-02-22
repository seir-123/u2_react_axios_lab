export default function Characters ({characters}) {
    return (
        <div>
            {
                characters.map((character, index) =>(
                       <div key={index}>
                        <h1>{character.name}</h1>
                        </div>    
                        
                ))
            }
        </div>
    )
    }