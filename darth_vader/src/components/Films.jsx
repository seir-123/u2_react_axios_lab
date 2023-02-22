
export default function Films (props) {

  

    return (
        <div>
        <h1>Films List</h1>
        {
            props.Films.map((film) => {
                <h1>{film.name}</h1>
            })
        }
    </div>
    )
}