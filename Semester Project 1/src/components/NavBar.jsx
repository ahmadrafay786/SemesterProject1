import React from 'react';
import "../../src/NavBar.css";

const NavBar = () => {
  return (
    <>
    <nav className="navbar">
    <div className="navbar__logo">Airbnb</div>
    <ul className="navbar__links">
      <li>Home</li>
      <li>Experiences</li>
      <li>Online Experiences</li>
    </ul>
    <div className="navbar__user">
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  </nav>
    </>
  )
}

export default NavBar