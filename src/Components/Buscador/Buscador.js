import React, { useState, useEffect } from 'react'
import { serverRequest } from '../../helpers/urlBack';
import './Buscador.css';
import { Link, useHistory } from "react-router-dom";


export const Buscador = ({buscadorClass, buscadorStyleClass, resultadosbusquedaClass}) => {

  const [search, setSearch] = useState("")
  const [listaBusquedas, setListaBusquedas] = useState([]);

  useEffect(() => {
    if (search !== "") {
      serverRequest(`user/${search}`, 'GET')
        .then((response) => {

          setListaBusquedas(response);
        })

        //En el then redirigir a página "resultados" donde se mostrarán los resultados de la búsqueda
        .catch(response => console.log(response))
    }
    else {
      setListaBusquedas([])
    }
    console.log('lista busquedas changed ');
  }, [search]);


  let history = useHistory();


  function handleClick(id) {
    history.push(`profile/${id}`);
  }



  return (

    <form>
      <div className={buscadorClass || "buscador"}>
        <div className={buscadorStyleClass || "buscadorStyle"}>
          <input placeholder="Buscar podcasts, radios y mucho más" value={search} onChange={event => setSearch(event.target.value)} className='buscador-input' />
          <i className="fas fa-search fa-2x lupita" />
        </div>
      </div>

      <div className={resultadosbusquedaClass || "resultadosbusqueda"}>
        {listaBusquedas.map(v => {
          return (
            <>
              <div class="autoComplete" onClick={() => setSearch(v.nombre)}>
                <span>
                  <Link className="UserCard-title" onClick={e => handleClick(v._id)}><p className="enlace">{v.nombre}</p></Link>
                </span>
              </div>
              <hr></hr>
            </>
          );
        })}
      </div>


    </form>
  )
};
