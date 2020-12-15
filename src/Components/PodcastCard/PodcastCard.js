import React, { useContext } from "react";
import './PodcastCard.css';
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from '../ButtonFlex/ButtonFlex';
import { serverRequest } from "../../helpers/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils";
import AudioPlayer from 'react-h5-audio-player';
import { usePlaybarContext } from "../../contexts/playbar";



export const PodcastCard = (props) => {
  const { title, categories, author, img, podcastId, description } = props;
  const [podcastWrapClass, setPodcastWrapClass] = useState();
  const [podcastAuthor, setPodcastAuthor] = useState(undefined);
  const [favoritosUsuario, setFavoritosUsuario] = useState(undefined);
  const [podcastEliminado, setPodcastEliminado] = useState({});
  const url = window.location.href;
  const token = getToken();
  const decodedToken = DecodeToken(token);
  const userId = decodedToken.id;
  let history = useHistory();
  const [iconFavoriteOnClick, setIconFavoriteOnClick] = useState(false);
  const [iconPlayOnClick, setIconPlayOnClick] = useState(false);
  const playbar = usePlaybarContext();

  useEffect(() => {
    serverRequest(`data/favoritos/?id_podcast=${podcastId}&&id_author=${userId}`, "GET")
      .then((response) => {
        debugger;
        setFavoritosUsuario(response[0]);
        console.log(favoritosUsuario);
        console.log("ANALIZED USER ^");
        if (response.length > 0) {
          console.log("PODCAST ID " + podcastId)
          setIconFavoriteOnClick(true);
        }
      })
      .catch(console.log);
  }, [])

  function clickFavorites() {
    
    if (!favoritosUsuario) {
      const newFavorite = {
        id_podcast: podcastId,
        id_author: userId
      };
      console.log(newFavorite)
      serverRequest("data/favoritos/", "POST", newFavorite)
        .then((response) => {
          console.log(favoritosUsuario + " FAVORITOS USER")
          console.log("CREADO")
          setIconFavoriteOnClick(true);
          debugger;
          setFavoritosUsuario(response);
        })
/*       serverRequest(`data/favoritos/?id_author=${userId}`, "GET")
        .then((response) => {
          setFavoritosUsuario(response)
        }) */
    }
    else if (favoritosUsuario && favoritosUsuario._id) {
      console.log("yes")
      serverRequest(`data/favoritos/${favoritosUsuario._id}`, "DELETE")
        .then(response => {
          console.log(response);
          setIconFavoriteOnClick(false);
          setFavoritosUsuario(undefined);
        });
/* 
      serverRequest(`data/favoritos/?id_podcast=${podcastId}`, "GET")
        .then(response => {
          debugger;
          serverRequest(`data/favoritos/${response[0]._id}`, "DELETE")
          .then(response => console.log(response));
        })
      console.log("yes")
      setIconFavoriteOnClick(false)
      serverRequest(`data/favoritos/?id_author=${userId}`, "GET")
        .then((response) => {
          setFavoritosUsuario(response)
        }) */
    }
  }

  function playPodcast() {
    playbar.setPlaybarPodcast(props);
  }
 
  /* ESTO ES PARA COGER EL NOMBRE DEL AUTOR */
  /* useEffect(() => {
    serverRequest(`data/user/${author}`, "GET")
        .then((response) => {
          setPodcastAuthor(response)
        })
        .catch(console.log);
  }, []) */

  function handleClick() {
    history.push(`/PodcastInformation/${podcastId}`);
  }

  useEffect(() => {
    if (url === "http://localhost:3000/") {
      setPodcastWrapClass("PodcastCard-wrap");
    }

    else {
      setPodcastWrapClass("PodcastCard-wrap-MyPodcasts");
    }
  }, [url]);

  return (
    <div className={podcastWrapClass}>
      <div style={{ backgroundImage: `url(${img})` }} className="PodcastCard-img">
        {/* <img src={img} alt={title} /> */}
      </div>
      <div className="icon-wrapper">

        {/*LINK ICON */}
        <Button onClick=''
          type='button'
          buttonStyle='btn--icon--outline'
        >
          <i className="fas fa-ellipsis-h icon-mini" />
        </Button>

        {/* PLAY ICON */}
        <Button onClick={()=>playPodcast(podcastId)}
          type='button' children={podcastId}
          buttonStyle={iconPlayOnClick ? 'btn--icon--outline' : 'btn--icon--outline'}
        ><i className='fas fa-play play-icon'></i>
        </Button>

        {/* FAVORITE ICON BUTTON  */}
        <Button onClick={clickFavorites}
          type='button' children={podcastId}
          buttonStyle={iconFavoriteOnClick ? 'btn--iconClicked--outline' : 'btn--icon--outline'}
        ><i className="fas fa-heart" />
        </Button>
      </div>
      <div className="PodcastCard-text">
        <Link className="PostcastCard-title" onClick={handleClick}>{title}</Link>
        <p className="PostcastCard-author">{author}</p>
        <p className="PostcastCard-duration">{categories}</p>
        <p className="PostcastCard-description">{description}</p>
        <p className="PostcastCard-description">{podcastId}</p>
      </div>
    </div>
  );
};