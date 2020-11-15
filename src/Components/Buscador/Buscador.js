import React, { useState } from 'react'
import { serverRequest } from '../../helpers/urlBack';
import './Buscador.css';

export const Buscador = () => {
  const [search, setSearch] = useState({})
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    serverRequest(`data/podcast/${search}`, 'GET')
      .then(response => console.log(response))
      //En el then redirigir a página "resultados" donde se mostrarán los resultados de la búsqueda
      .catch(response => console.log(response))
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <div className="buscador">
      <i className="fas fa-search fa-2x" />
      <input placeholder="Buscar podcasts, radios y mucho más" onChange={handleSearch} className='buscador-input' />
      </div>
    </form>
    
  )
}
