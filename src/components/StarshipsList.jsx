export default function StarshipsList (props) {
  console.log(props.starships)



  return (
    <div className="Yoda"> 

    <h1>List of Starships</h1>
      {
        props.starships.map((starship) => (
          <div key={starship.id} classname="obiwan">
            <h3>{starship.name}</h3>
            
          </div>
        ))
      }
    </div>
  )
}
