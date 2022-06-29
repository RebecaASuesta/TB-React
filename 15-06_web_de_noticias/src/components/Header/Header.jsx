import React from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className='header'>
        <h3>EL SITIO DE LOS ININCONFORMISTAS</h3>
        <div>
          <span>
            <Link to="/">Página principal</Link>
          </span>
          <span>
            <Link to="/form">Crea tu noticia</Link>
          </span>
          <span>
            <Link to="/list">Lista de noticias</Link>
          </span>
        </div>
    </nav>
  )
}

export default Header