import React from "react";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import "./FavoritosUser.css";
import { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";


export const FavoritosUser = (props) => {
  const userId = props.userId
  const [listaFavoritosUser, setListaFavoritosUser] = useState([]);
  /*  const [idAuthor, setIdAuthor] = useState({}); */
  const [listaPodcastsPrint, setListaPodcastsPrint] = useState([]);


  useEffect(() => {
    if (!userId) {
      return;
    }

    (async () => {
      const userFavorites = await serverRequest(`data/favoritos/?id_author=${userId}`, "GET")
        .then((response) => {
          return response;
        });
      console.log(userFavorites)
      const userFavoritesWithData = userFavorites.map(async (favorito) => {
        await serverRequest(`data/podcast/${favorito.id_podcast}`, "GET")
          .then((response) => {
            console.log(response)
            /* return response; */
            //listaPodcastsPrint.push(response)
            //setListaPodcastsPrint([...listaFavoritosUser, response])
            console.log(userFavoritesWithData);
            setListaPodcastsPrint(response);
          });
      });
      

      console.log(userFavoritesWithData);
    })()


  }, [userId]);

  return (
    <div className="PodcastsUser-wrap">
      {listaPodcastsPrint && listaPodcastsPrint.map(podcast =>
      (
        <>
          {listaPodcastsPrint.length}
          <PodcastCard
            podcastId={podcast._id}
            title={podcast.title}
            categories={podcast.categories}
            description={podcast.description}
            author={podcast.id_author}
            img={"https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"}
          />
        </>
      ))}
    </div>
  );
};

/* import React from "react";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import "./FavoritosUser.css";
import { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils";

export const FavoritosUser = (props) => {
  const userId = props.userId
  const [listaFavoritosUser, setListaFavoritosUser] = useState([]);
    const [idAuthor, setIdAuthor] = useState({}); 
  const [listaPodcastsPrint, setListaPodcastsPrint] = useState([])
     const token = getToken();
    const decodedToken = DecodeToken(token);
    const userId = decodedToken.id; 

  useEffect(() => {
    if (userId) {
      serverRequest(`data/favoritos/?id_author=${userId}`, "GET")
        .then((response) => {
          setListaFavoritosUser(response);
          console.log(listaFavoritosUser)
        })
        .catch(console.log);
    }
  }, [userId]);

  useEffect(() => {
    if (listaFavoritosUser.length > 0) {
      listaFavoritosUser.map(favorito =>
        serverRequest(`data/podcast/${favorito.id_podcast}`, "GET")
          .then((response) => {
            //listaPodcastsPrint.push(response)
            setListaPodcastsPrint([...listaPodcastsPrint, response])
          })
          .catch(console.log)
      )
    }

    console.log(listaPodcastsPrint)
  }, [listaFavoritosUser]);
  //Falta mapear los podcast que hemos guardado en setFavoritosUser. Lo que tenemos en FavortiosUser, es el id del autor y el id de
  //los podcast que estan en fav. Hay que coger el id del podcast y pasarselo de alguna manera a la podcast card.
  // Creo que hace falta un for each, porque listaFavoritos es un array. Coger lo que hay dentro e iterarlo por un useEffect para
  // priintearlo todo dentro de listaPodcastPrint

  return (
    <div className="PodcastsUser-wrap">
      {listaPodcastsPrint && listaPodcastsPrint.map(podcast =>
        (
          <PodcastCard
            podcastId={podcast._id}
            title={podcast.title}
            categories={podcast.categories}
            description={podcast.description}
            author={podcast.id_author}
            img={"https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"}
          />
        ))}
    </div>
  );
};
 */