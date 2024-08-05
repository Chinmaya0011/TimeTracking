// Navbar.js
import React from 'react';
import style from "../../assets/styles/Home/Navbar.module.css";
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <h1>Dukandar</h1>
      <div className={style['nav-links']}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
