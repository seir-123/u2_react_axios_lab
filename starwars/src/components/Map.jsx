export default function Map(props){
    return(
        <div className = "grid">{
            props.results.map((item) => (
            <div key = {item.id} className ="card">
                <h3>{item.name}</h3>
                </div>
            )) }
     </div>
           
      )
    }
