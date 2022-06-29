import React, { useContext, useEffect } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import './List.scss';

const List = () => {
  const { noticias, getNoticias } = useContext(GlobalContext);
  useEffect(() => {
    getNoticias();
  }, []);

  const externalLink = (url) => {
    window.location.replace(url)
  }

  const noticia = noticias.map((noticia) => {
    return (
      <div key={noticia.id} className='list'>
        <h3>{noticia.title}</h3>
        <button onClick={()=> externalLink(noticia.url)}>Ve a la noticia</button>
      </div>
    );
  });
  return <div>{noticia}</div>;
}

export default List