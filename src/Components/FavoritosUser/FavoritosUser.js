
import React from "react";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import "./FavoritosUser.css";
import { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";

export const FavoritosUser = (props) => {
  const userId = props.userId
  const [listaFavoritosUser, setListaFavoritosUser] = useState([]);


  useEffect(() => {
    if (userId) {
      serverRequest(`data/favoritos/?id_author=${userId}`, "GET")
        .then((response) => {
          setListaFavoritosUser(response);
          console.log("Lista favoritos", response);
         
        })
    }
  }, [userId]);



  return (
    <div className="PodcastsUser-wrap">
      {listaFavoritosUser && listaFavoritosUser.map(podcast =>
      (
        <PodcastCard
          audio={podcast.audio}

          podcastId={podcast.id_podcast._id}
          title={podcast.id_podcast.title}
          categories={podcast.id_podcast.categories}
          description={podcast.id_podcast.description}
          author={podcast.id_podcast.id_author}
          img={"https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"}
        />
      ))}
    </div>
  )
}
