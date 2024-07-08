import React from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CiUser } from "react-icons/ci";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarItems">
        <Link to="/" className="navbarLink">
          Home
        </Link>
        <Link to="/contact" className="navbarLink">
          Contact
        </Link>
        <Link to="/about" className="navbarLink">
          About
        </Link>
        <Link to="/signup" className="navbarLink">
          Sign Up
        </Link>
      </div>
      <div className="navbarSearch">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="navbarSearchInput"
        />
        <AiOutlineSearch className="navbarSearchIcon" />
      </div>
      <div className="navbarIcons">
        <AiOutlineHeart className="navbarIcon" />
        <AiOutlineShoppingCart className="navbarIcon" />
        <CiUser className="navbarIcon" />
      </div>
    </div>
  );
}

export default Navbar;
