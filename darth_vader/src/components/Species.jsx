export default function Species ({Species}) {

    return (
        <div>
        <h1>Species List</h1>
        {
            Species.map((species) => {
                <h1>{species.name}</h1>
            })
        }
    </div>
    )
}