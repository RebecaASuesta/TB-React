import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <h1>RIP</h1>
        <span>Rich In Plants</span>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/location">Location</Link>
      </div>
    </nav>
  )
}

export default Header