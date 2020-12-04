import React from "react";
import './PodcastCard.css';
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {Button} from '../ButtonFlex/ButtonFlex';
import { serverRequest } from "../../helpers/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils"; 

export const PodcastCard = ({ title, categories, author, img, podcastId, description }) => {
  
  
  const [podcastWrapClass, setPodcastWrapClass] = useState();
  const url = window.location.href;
  let history = useHistory();
  const [iconFavoriteOnClick, setIconFavoriteOnClick] = useState(false);
  const [newFavorite, setNewFavorite] = useState({
    "id_podcast": undefined,
    "id_author": undefined
  })
  
  function clickFavorites (podcastId){
    
    setIconFavoriteOnClick(!iconFavoriteOnClick);
    
    const token = getToken();
    const decodedToken = DecodeToken(token);
    const userId = decodedToken.id;
    setNewFavorite({
      "id_podcast": podcastId,
      "id_author": userId
    })
    serverRequest("data/favoritos", "POST", newFavorite)
    .then((response) =>{ 
    if (response.ok) {alert("Guardado");}
    else {alert("No guardado")}
    })
  }

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
        <Button onClick=''
                type='button' 
                buttonStyle='btn--icon--outline'
              ><i className='fas fa-play play-icon'></i>
        </Button>

        {/* FAVORITE ICON BUTTON  */}
        <Button onClick={clickFavorites(podcastId)}
                type='button' 
                buttonStyle={iconFavoriteOnClick ? 'btn--iconClicked--outline' : 'btn--icon--outline'}
              > 
                <i className="fas fa-heart" />
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
