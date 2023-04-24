import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <nav className="w-screen h-[12vh] flex items-center justify-between bg-[#050609] text-[#D69F7E] fixed shadow-lg z-20">
        <img
          src={Logo}
          alt=""
          className="w-[250px] h-[250px] mx-[5rem] cursor-pointer"
        />
        <ul className="flex justify-end mx-[13rem] w-1/2 gap-[5rem]">
          <li className="hover:text-[#F5D0C5] cursor-pointer" href="#home">
            <Link to="/">Home</Link>
          </li>
          <a className="hover:text-[#F5D0C5] cursor-pointer" href="#recipes">
            Recipes
          </a>
          <li className="hover:text-[#F5D0C5] cursor-pointer">Groups</li>
          <li className="hover:text-[#F5D0C5] cursor-pointer">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
