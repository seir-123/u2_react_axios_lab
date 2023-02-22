const StarshipsList = (props) => {
  return (
    <div>
      <h3>Starships List</h3>
      {
        props.starships.map((starship) => (
          <div key={starship.name} className='starship-card' >
            <p>{starship.name}</p>
          </div>

        )
        )
      }
    </div >
  )
}

export default StarshipsList