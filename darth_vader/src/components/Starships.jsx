export default function Starships ({Starships}) {

    return (
        <div className='Starships'>
    
        {
            Starships.map((starship) => {
                <h1>{starship.name}</h1>
            })
        }
    </div>
    )
}