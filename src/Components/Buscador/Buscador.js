import React, { useState, useEffect } from 'react'
import { serverRequest } from '../../helpers/urlBack';
import './Buscador.css';
import { Link, useHistory } from "react-router-dom";


export const Buscador = ({buscadorClass, buscadorStyleClass, resultadosbusquedaClass}) => {
  /* useEffect(() => {
   if (url === "http://localhost:3000/" || "https://tuna-in.netlify.app/") {
     setBuscadorClass("buscador-home");
     setBuscadorStyleClass("buscadorStyle-home");
     setResultadosbusquedaClass("resultadosbusqueda-home");
   }
   else if (!url === "http://localhost:3000/" || "https://tuna-in.netlify.app/"){
     setBuscadorClass("buscador");
     setBuscadorStyleClass("buscadorStyle");
     setResultadosbusquedaClass("resultadosbusqueda");
   }
 }, [url]); */
  const [updateRender, setUpdateRender] = useState(false);
  const [search, setSearch] = useState("")
  const [listaBusquedas, setListaBusquedas] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
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
  const updateSearch = (e) => {

  }

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
