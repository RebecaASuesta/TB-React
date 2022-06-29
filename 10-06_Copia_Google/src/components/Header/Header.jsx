import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
        <div>
            <a href="https://about.google/?fg=1&utm_source=google-ES&utm_medium=referral&utm_campaign=hp-header">Sobre Google</a>
            <a href="https://store.google.com/ES?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=es-ES">Tienda</a>
        </div>
        <div>
            <a href="https://www.google.com/intl/es/gmail/about/">Gmail</a>
            <a href="https://www.google.es/imghp?hl=es&ogbl">Imágenes</a>
            {/* Cuadradito */}
            <button className='loginButton'>Iniciar sesión</button>
        </div>
    </div>
  )
}

export default Header