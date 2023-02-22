

export default function StarshipsList (props) {

    return (
       
        <div>
           
           { 
            props.StarshipsList.map((starshipList) => {
                    <h1>{starshipList.name}</h1>
                })
            }
        </div>
    )
  

   
        
     

}