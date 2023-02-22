export default function Planets ({Planets}) {

    return (
           <div>
        <h1>Planets List</h1>
        {
            Planets.map((planets) => {
                <h1>{planets.name}</h1>
            })
        }
    </div>
    )
}