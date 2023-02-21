export default function CharactersList(props) {
    console.log(props.characters)
    return (
        <div className="grid">
            {
                props.characters.map((character) => (
                    <div key={character.id} className="card">
                        <h3>{character.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}