import React from "react";
import { Link } from "react-router-dom";

function Header() {  
  return (
      <header className="header-container">
        <h1>Portfolio</h1>
        <ul>
          <li><Link className="hvr-grow-shadow" to="/">Home</Link></li>
          <li><Link className="hvr-grow-shadow" to="/projects">Projects</Link></li>
          <li><Link className="hvr-grow-shadow" to="/about">About me</Link></li>
          <li><Link className="hvr-grow-shadow" to="/contact">Contact</Link></li>
        </ul>
      </header>
  );
}

export default Header;
