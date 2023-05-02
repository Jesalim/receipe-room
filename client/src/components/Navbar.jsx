import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="h-[12vh] flex items-center justify-between bg-[#050609] text-[#D69F7E]  shadow-lg z-20" id="nav">
        <img
          src={Logo}
          alt=""
          className="w-[250px] h-[250px] mx-[5rem] cursor-pointer"
        />
        <ul className="flex justify-end mx-[13rem] w-1/2 gap-[5rem]">
          <li className="hover:text-[#F5D0C5] cursor-pointer">
            <Link to="/home">Home</Link>
          </li>
          <Link to="/recipes">
            <a className="hover:text-[#F5D0C5] cursor-pointer">Recipes</a>
          </Link>
          <Link to="/group">
            <li className="hover:text-[#F5D0C5] cursor-pointer">Groups</li>
          </Link>
          <Link to="/login">
            <li className="hover:text-[#F5D0C5] cursor-pointer">Logout</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
