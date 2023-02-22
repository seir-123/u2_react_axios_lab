export default function People ({People}){

    return (
        <div>
        <h1>People List</h1>
        {
            People.map((people) => {
                <h1>{people.name}</h1>
            })
        }
    </div>
    )
}