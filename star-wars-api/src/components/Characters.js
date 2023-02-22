import CharacterLists from './CharactersList';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { CHARACTER_URL } from "../globals";



const Characters = () => {
    
    const [characters, setCharacters] = useState ([])
    

    useEffect(() =>{
        const getCharacters = async () => {
            const response = await axios.get(`${CHARACTER_URL}`)
            console.log(response.data.results)
            setCharacters(response.data.results)
        }
        getCharacters()
    },[])

    return (
        <div>
            <CharacterLists characters={characters}/>
        </div>
        
        
    )
}

export default Characters