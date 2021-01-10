import React, { useState, useEffect, useRef } from 'react'
import { serverRequest } from '../../helpers/urlBack';
import { useHistory } from 'react-router-dom';
import './Buscador.css';
import { useParams } from "react-router-dom";

export const Buscador = () => {
  const [contenedorClass, setContenedorClass] = useState();
  const [buscadorClass, setBuscadorClass] = useState();
  const [display, setDisplay] = useState(false);
  const url = window.location.href;  
  const [listaBusquedas, setListaBusquedas] = useState([]);
  const history = useHistory();
  const { urlSearch } = useParams();
  const [search, setSearch] = useState(urlSearch)


  useEffect(() => {
    if (url === "http://localhost:3000/") {
      setBuscadorClass("buscador-home");
      setContenedorClass("buscadorStyle");
    }
    else {
      setBuscadorClass("buscador");
      setContenedorClass("buscadorPage");
    }
  }, [url]);

  useEffect(() => {
    if (url === "http://localhost:3000/"){
    serverRequest(`user/${search}`, 'GET')
      .then((response) => {
        setListaBusquedas(response);
      })
      .catch(response => console.log(response))
    }else{
      history.push(`/search/${search}`);
    }
  }, [search]);

  const setUser = user => {
    setSearch(user);
    history.push(`/search/${user}`);
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  
  const handleSubmit = (e) => {
      e.preventDefault();
      history.push(`/search/${search}`);
    };
  
  let menuRef = useRef(null);
  const itemEls = useRef(new Array())
  useEffect(() =>{
    document.addEventListener("mousedown", (event) => {
    if(menuRef && menuRef.current) { 
      if(!menuRef.current.contains(event.target)){
      setDisplay(false);
      }
    }
    });
  });

  const updateSearch = (e) => {
  
  }
 const modDisplay = () => {
  if (url === "http://localhost:3000/") {
    setDisplay(!display);
  }
 }

  return (
   
    <form onSubmit={handleSubmit}>
      <div className={buscadorClass}>
        <div className={contenedorClass}>
          <input 
          placeholder="Buscar podcasts, radios y mucho más" 
          value={search} 
          onChange={event => setSearch(event.target.value)} 
          className='buscador-input' 
          onClick={()=>modDisplay()}
          />
          <i className="fas fa-search fa-2x lupita" />
        </div>
      </div>
     {display && search !== "" && (
      <span  ref={menuRef} className={"resultadosbusqueda"}>
        {listaBusquedas.map(v =>{
            return( 
            <div  onClick={() => setUser(v.nombre)}class="autoComplete">
              <span>
              {v.nombre}
              </span>
            </div>
          );
        })}
       </span>
    )}
    </form>
    
    )
  };
