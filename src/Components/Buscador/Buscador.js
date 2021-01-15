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
  const [updateRender, setUpdateRender] = useState(false);
  const [search, setSearch] = useState("Buscar podcasts, radios y mucho más")
  const [listaBusquedas, setListaBusquedas] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  useEffect(() => {
    serverRequest(`user/${search}`, 'GET')
      .then((response) => {
        setListaBusquedas(response);
      })
      
      //En el then redirigir a página "resultados" donde se mostrarán los resultados de la búsqueda
      .catch(response => console.log(response))
    console.log('lista busquedas changed ');
  }, [search]);
  const updateSearch = (e) => {
  
  }


  return (
   
    <form>
      <div className={buscadorClass}>
        <div className={"buscadorStyle"}>
          <input placeholder="Buscar podcasts, radios y mucho más" value={search} onChange={event => setSearch(event.target.value)} className='buscador-input' />
          <i className="fas fa-search fa-2x lupita" />
        </div>
      </div>
     
      <div className={"resultadosbusqueda"}>
       
        {listaBusquedas.map(v =>{
            return( 
            <div class="autoComplete" onClick={() => setSearch(v.nombre)}>
              <span>
              {v.nombre}
              </span>
            </div>
          );
        })}
       </div>
       
   
    </form>
    )
  };
