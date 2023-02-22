export default function Vehicles ({Vehicles}) {

    return (
        <div>
        <h1>Vehicles List</h1>
        {
            Vehicles.map((vehicle) => {
                <h1>{vehicle.name}</h1>
            })
        }
    </div>
    )
}