

export default function StarshipsList ({StarshipsList}) {

    return (
       
        <div className='StarshipsList'>
           { 
            
                StarshipsList.map((starshipList) => {
                    <h1>{starshipList.name}</h1>
                })
            }
        </div>
    )
  

   
        
     

}