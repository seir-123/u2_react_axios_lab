export default function Characters(props) {
    return (
        <div>
            {
                props.characters.map((character) => (
                    <div key={character.name} className='characters card'>
                        <h1>{character.name}</h1>
                        <h3>Height: {character.height}</h3>
                        <h3>Birth Year: {character.birth_year}</h3>
                        <h3>Gender: {character.gender}</h3>
                    </div>
                ))
            }
        </div>
    )
}