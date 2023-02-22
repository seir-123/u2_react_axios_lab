export default function CharacterLists (props) {

    console.log(props.characters)
    return (
     
    <div className="fullContainer">
        <h2 className="title">List of Characters</h2>
        <div className="listContainer">
            {
                props.characters.map((character) => (
                    <div key={character.name} className="item">
                        <h3>{character.name}</h3>
                        
                    </div>
                ))
            }
        </div>
    </div>    
    )
}