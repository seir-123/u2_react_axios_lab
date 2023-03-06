import { useNavigate } from "react-router-dom"

export default function StarshipsList(props){

    let navigate = useNavigate()
    const showStarship = (index) => {
        navigate(`${index}`)
    }

    return(
        <div className="starshipsListContainer">
            {
                props.results.map((starship, index) => (
                    <div className="shipCard" key= {index} onClick={() => showStarship(index)}>
                        <h4>{starship.name}</h4>
                    </div>
                ))
            }
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