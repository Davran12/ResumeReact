import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/information"}>Обо мне</NavLink>
      <NavLink to={"/home"}>Домашняя страница</NavLink>
      <NavLink to={"/contacts"}>Контакты</NavLink>
    </div>
  );
};

export default NavBar;
