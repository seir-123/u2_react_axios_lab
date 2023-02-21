export default function Characters(props){
    return(

        <div className = "grid">
        {
        props.results.map((character) => (
            <div key = {character.id} className ="card">
                <h3>{character.name}</h3>
            </div>
            ))
        }
    </div>
      )
    }

