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
        <div className="fullContainer">
            <h2 className="title">List of Characters</h2>
            <div className="listContainer">
                {
                    characters.map((character) => (
                        <div key={character.name} className="item">
                            <h3>{character.name}</h3>
                            
                        </div>
                    ))
                }
            </div>
        </div>
        
        
    )
}

export default Characters