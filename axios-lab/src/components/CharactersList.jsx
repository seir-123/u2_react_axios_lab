const CharactersList = (props) => {
  return (
    <div>
      <h3>Characters List</h3>
      {
        props.characters.map((character) => (
          <div key={character.name} className='character-card' >
            <p>{character.name}</p>
          </div>

        )
        )
      }
    </div>
  )
}

export default CharactersList