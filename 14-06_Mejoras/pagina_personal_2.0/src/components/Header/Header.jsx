import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <span>Rebeca's personal page</span>
        <div>
          <Link to="/">Home</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Header