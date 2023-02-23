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
          <NavLink to="Films">Films</NavLink>
        </li>
        <li>
          <NavLink to="People">People</NavLink>
        </li>
        <li>
          <NavLink to="Planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="Species">Species</NavLink>
        </li>
        <li>
          <NavLink to="Starships">Starships</NavLink>
        </li>
        <li>
          <NavLink to="Vehicles">Vehicles</NavLink>
        </li>
      </ul>
    </nav>
  );
}
