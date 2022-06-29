import React from 'react';
import './Home.css';
import searchImage from '../../assets/search.png'
import microphoneImage from '../../assets/microphone.jpg'

const Home = () => {
  return (
    <div className='google-container'>
        <div >
            <img className='logo' src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png" alt="Logo de Google" />
        </div>
        <div className='input-container'>
            <img className='search' src={searchImage} alt="" />
            <input type="text" />
            <img className='microphone' src={microphoneImage} alt="" />
        </div>
        <div className='buttons-container'>
            <button>Buscar con Google</button>
            <button>Voy a tener suerte</button>
        </div>
        <div className='languaje-container' >
        <span>Ofrecido por Google en:</span>
            <a href="">català</a>
            <a href="">galego</a>
            <a href="">euskera</a>
        </div>
    </div>
  )
}

export default Home