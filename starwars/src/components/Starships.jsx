
export default function Starships(props){

  return(
   
    <div className = "grid">
    {
    props.results.map((ship) => (
        <div key = {ship.id} className ="card">
            <h3>{ship.name}</h3>
        </div>
        ))
    }
</div>
  )
}