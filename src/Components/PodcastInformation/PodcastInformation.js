import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { serverRequest } from "../../helpers/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils";
import "./PodcastInformation.css";

export const PodcastInformation = () => {
  const [user, setUser] = useState({});
  const [podcast, setPodcast] = useState({});
  let history = useHistory();

  function handleClick() {
    history.push(`/editPodcastInformation/${podcastId}`);
  }

  let { podcastId } = useParams();

  useEffect(() => {
    serverRequest(`data/podcast/${podcastId}`, "GET")
      .then((response) => {
        setPodcast(response)
      })
      .catch(console.log);
  }, []);


  useEffect(() => {
    const token = getToken();
    const decodedToken = DecodeToken(token);
    const userId = decodedToken.id;

    serverRequest(`data/user/${userId}`, "GET")
      .then((response) => {
        setUser(response);
      })
      .catch(console.log);
  }, []);

  const editPodcastLink = () => {
    if (user._id === podcast.id_author) {
      return (
        <>
          <div>
            <Link onClick={handleClick}><button>Editar podcast</button></Link>
          </div>
        </>)
    }
  }

  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <div className="Pod-wrap">
            <img className="Pod-wrap__image" src="https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"></img>
            <div className="Pod-wrap__text">
                <h1>{podcast.title}</h1>
                <p>{podcast.categories}</p>
                <p>{podcast.description}</p>
                <p>podcast id</p>
                <p>{podcast._id}</p>
                <p>author</p>
                <p>{podcast.id_author}</p>
                <br />
                <br />
                <p>{user.nombre}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user._id}</p>
                
                {editPodcastLink()}
            </div>
      </div>
      </div>

      {}
    </>
  );
};
