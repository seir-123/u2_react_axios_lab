import { useState, useEffect } from 'react'
import  axios  from 'axios'
import { SPECIES_URL } from '../globals'


export default function SpeciesList () {
    const [species, setSpecies] = useState([])

    useEffect(() => {
      const getSpecies = async () => {
        const response = await axios.get(`${SPECIES_URL}`)
        console.log(response.data.results)
        setSpecies(response.data.results)
      }
  
      getSpecies()
    }, [])
    console.log (species)
    return (
        <div className="grid" id="species">
            {
                species.map((species) => (
                    <div key={species.title} className="card">
                        <h2>{species.name}</h2>
                        <h3>{species.classification}</h3>
                    </div>
                ))
            }
        </div>
    )
}