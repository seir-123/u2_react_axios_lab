export default function StarshipsList(props) {
    console.log(props.starships)
    return (
        <div className="grid">
            {
                props.starships.map((starship) => (
                    <div key={starship.id} className="card">
                        <h3>{starship.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}