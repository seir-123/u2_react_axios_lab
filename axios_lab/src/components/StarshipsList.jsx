export default function StarshipsList(props){
// console.log(props.starships);
    return(

        <div className="grid">       
            {
            props.ships.map((starship) => (
                <div key={starship.id} className="card">
                    <h4 className="labels">NAME</h4>
                    <h2 className="resultsLarge">{starship.name}</h2>

                    <h4 className="labels">MODEL</h4>
                    <h3 className="resultsSmall">{starship.model}</h3>
                    <h4 className="labels">MANUFACTURER</h4>
                    <h3 className="resultsSmall">{starship.manufacturer}</h3>
                    <h4 className="labels">CREW</h4>
                    <h3 className="resultsSmall">{starship.crew}</h3>
                    <h4 className="labels">PASSENGERS</h4>
                    <h3 className="resultsSmall">{starship.name}</h3>

                    <h2 className="resultsLarge"><span>$</span>{ starship.model }</h2>
                </div>
            ))}
        </div>
    )
}

// MIMICKING MOVIES LESSON //////////////////////////////////////////////////////////////////////////////////////// 
// {
////     props.movies.map((movie) => (   
////       <div key={movie.id} className="card">
//         <h3>{movie.title}</h3>
//         <button>View Movie</button>
//       </div>
//     ))
//   }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////