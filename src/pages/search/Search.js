import React, { useState, useEffect, useRef } from 'react'
import { serverRequest } from '../../helpers/urlBack';
import "./Search.css";
import { Buscador } from "../../Components/Buscador/Buscador";
import { useParams } from "react-router-dom";


export const Search = () => {

    const [listaBusquedas, setListaBusquedas] = useState([]);
    const [listaPodcastAuthor, setListaPodcastAuthor] = useState([]);
    const [userPodCast, setUserPodCast] = useState([]);

  
    const { urlSearch } = useParams();
    const search = urlSearch;
    //poner una const de array
    

    useEffect(() => {
    serverRequest(`user/${search}`, 'GET')
      .then((response) => {
        setListaBusquedas(response);
      })
      .catch(response => console.log(response))
  }, [search]);

    useEffect(() => {
        setListaPodcastAuthor([]);
    listaBusquedas.map(v => {
        serverRequest(`data/podcast/?id_author=${v._id}`, 'GET')
        .then((response) => {
           //listaPodcastAuthor.push(response);

           setListaPodcastAuthor(state => [...state, response])
         
        })
        .catch(response => console.log(response))
       })
  }, [listaBusquedas]);

 
    return (
        <>
        <div className="header">
            <h1>Búsqueda</h1>
        </div>
        
        <Buscador/>                   
        {listaBusquedas && listaBusquedas.length > 0 && search !== "" && (
        <div>
        <div className="usersBlock">
             <h3>Users</h3>
            {listaBusquedas.map(v =>{
                return( 
                <div class="usersBlock">
                <a href = "/#">   
                    <img width="70px" height="70px" src="https://lh3.googleusercontent.com/proxy/is6LvKciGKa9qKzjp3kGS_xEvI2pJqRolLxRd_7fboIrndFrsBIutwX90ZIEeIKRL2NZNwbPThp_P9Lp2y1l0tljS4XhaWNos4wy"></img>
                    <span>
                        {v.nombre}
                        {setUserPodCast}
                    </span>
                </a>
                </div>
            );
            })}
        </div>

        <div className="podCastBlock">
            {listaBusquedas !== undefined && listaBusquedas.length > 0 &&(
            <div>
            {listaPodcastAuthor.map((v, i) =>{
                return( 
                <div class="podCast">           
                    {listaBusquedas[i] !== undefined && listaPodcastAuthor[i].length > 0 &&(
                    <div>
                        <h3>PodCasts by {listaBusquedas[i].nombre}</h3>  
             
                        {listaPodcastAuthor[i].map((v, i) =>{
                            return(
                        <a href = {"/PodcastInformation/" + listaPodcastAuthor._id}>
                           
                            <div class="podCasts">
                                <div>
                                    <img width="70px" height="70px" src="https://i.pinimg.com/originals/1c/e4/c8/1ce4c8a443d1782e1129c1e4c9215645.jpg"></img>
                                </div>
                                <div class="podcastContent">
                                    <div class="podcastTitle">
                                    {v.title}
                                    </div>
                                    <div class="podcastDate">          
                                        {new Date(v.created ).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        </a>    
                                )
                        })/*map*/}
                        
                    </div>
                    )}
                        
                    </div>
            );
            })}
            </div>
            )}
        </div>
        </div>
        )} 
    
  
        
            
        </>
    );
};
