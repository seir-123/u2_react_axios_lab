import { useState } from 'react'
import StarshipsList from './StarshipsList'
import FilmsList from './FilmsList'
import PeopleList from './PeopleList'
import PlanetsList from './PlanetsList'
import SpeciesList from './SpeciesList'
import VehiclesList from './VehiclesList'

export default function Nav () {
    const [showStarships, setShowStarships] = useState(false)
    const [showFilms, setShowFilms] = useState(false)
    const [showPeople, setShowPeople] = useState(false)
    const [showPlanets, setShowPlanets] = useState(false)
    const [showSpecies, setShowSpecies] = useState(false)
    const [showVehicles, setShowVehicles] = useState(false)

    const hideAll = () => {
        setShowFilms(false)
        setShowStarships(false)
        setShowPeople(false)
        setShowPlanets(false)
        setShowSpecies(false)
        setShowVehicles(false)
    }

    const handleStarshipsClick = () => {
        hideAll()
        setShowStarships(true)
    }
    const handleFilmsClick = () => {
        hideAll()
        setShowFilms(true)
    }
    const handlePeopleClick = () => {
        hideAll()
        setShowPeople(true)
    }
    const handlePlanetsClick = () => {
        hideAll()
        setShowPlanets(true)
    }
    const handleSpeciesClick = () => {
        hideAll()
        setShowSpecies(true)
    }
    const handleVehiclesClick = () => {
        hideAll()
        setShowVehicles(true)
    }


    return (
        <nav>
            <ul>
                <li><a href="#starships" onClick={handleStarshipsClick}>Starships</a></li>
                <li><a href="#films" onClick={handleFilmsClick}>Films</a></li>
                <li><a href="#people" onClick={handlePeopleClick}>People</a></li>
                <li><a href="#planets" onClick={handlePlanetsClick}>Planets</a></li>
                <li><a href="#species" onClick={handleSpeciesClick}>Species</a></li>
                <li><a href="#vehicles" onClick={handleVehiclesClick}>Vehicles</a></li>
            </ul>
            {showStarships && <StarshipsList />}
            {showFilms && <FilmsList />}
            {showPeople && <PeopleList />}
            {showPlanets && <PlanetsList />}
            {showSpecies && <SpeciesList />}
            {showVehicles && <VehiclesList />}
        </nav>
    )
}