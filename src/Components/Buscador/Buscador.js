import React, { useState, useEffect } from 'react'
import { serverRequest } from '../../helpers/urlBack';
import './Buscador.css';

export const Buscador = () => {
  const [buscadorClass, setBuscadorClass] = useState();
  const url = window.location.href;

  useEffect(() => {
    if (url === "http://localhost:3000/") {
      setBuscadorClass("buscador-home");
    }
    else {
      setBuscadorClass("buscador");
    }
  }, [url]);

  const [search, setSearch] = useState({})
  const [listaBusquedas, setListaBusquedas] = useState();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    serverRequest(`data/podcast/?title=${search}`, 'GET')
      .then(response => console.log(response))
      //En el then redirigir a página "resultados" donde se mostrarán los resultados de la búsqueda
      .catch(response => console.log(response))
  }


  return (

    <form onSubmit={handleSubmit}>
      <div className={buscadorClass}>
        <div className={"buscadorStyle"}>
          <input placeholder="Buscar podcasts, radios y mucho más" onChange={handleSearch} className='buscador-input' />
          <i className="fas fa-search fa-2x lupita" />
        </div>
      </div>
      <div className={"resultadosbusqueda"}>
        {/* {listaBusquedas.map(podcast =>
          (
            <p
              podcastId={podcast._id}
              title={podcast.title}
              categories={podcast.categories}
              description={podcast.description}
              author={podcast.id_author}
              img={"https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"}
            ></p>
          ))} */}
      </div>
    </form>
  )
}
