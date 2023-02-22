import { useNavigate } from 'react-router-dom'
export default function Characters(props){
    let navigate = useNavigate()
    const showChar = (index)=>{
      navigate(`${index}`)
    }
  
    return(

        <div className = "grid">
        {
        props.results.map((character,index) => (
            <div key = {index} className ="card" onClick={() => showChar(index)}>
                <h3>{character.name}</h3>
            </div>
            ))
        }
    </div>
      )
    }



