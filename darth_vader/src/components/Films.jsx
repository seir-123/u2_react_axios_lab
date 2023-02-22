export default function Films ({Films}) {

    return (
        <div>
        <h1>The StarWars ships list</h1>
        {
            Films.map((film) => {
                <h1>{film.name}</h1>
            })
        }
    </div>
    )
}