import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="FilmsList">Films</NavLink>
        </li>
        <li>
          <NavLink to="PeopleList">People</NavLink>
        </li>
        <li>
          <NavLink to="PlanetsList">Planets</NavLink>
        </li>
        <li>
          <NavLink to="SpeciesList">Species</NavLink>
        </li>
        <li>
          <NavLink to="StarshipsList">Starships</NavLink>
        </li>
        <li>
          <NavLink to="VehiclesList">Vehicles</NavLink>
        </li>
      </ul>
    </nav>
  );
}
