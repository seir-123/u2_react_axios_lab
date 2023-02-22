import { useState, useEffect } from 'react'
import  axios  from 'axios'
import { PEOPLE_URL } from '../globals'


export default function PeopleList () {
    const [people, setPeople] = useState([])

    useEffect(() => {
      const getPeople = async () => {
        const response = await axios.get(`${PEOPLE_URL}`)
        console.log(response.data.results)
        setPeople(response.data.results)
      }
  
      getPeople()
    }, [])
    console.log (people)
    return (
        <div className="grid" id="people">
            {
                people.map((person) => (
                    <div key={person.name} className="card">
                        <h2>{person.name}</h2>
                        <h3>{person.birth_year}</h3>
                    </div>
                ))
            }
        </div>
    )
}