import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { serverRequest } from "../../helpers/urlBack";
import {getUserId} from "../../util/LocalStorage.utils";
import "./PodcastInformation.css";

export const PodcastInformation = () => {
  const [user, setUser] = useState({});
  const [podcast, setPodcast] = useState({});
  let history = useHistory();
  const userId = getUserId();

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
      <div className="UserProfile-wrap">
        <br />
        <div className="UserCard-wrap">
          <div className={"UserInfo"}>
            <h2>{podcast.title}</h2>
            <div><p>Categories: <span className="podcastInformationDisplayed">{podcast.categories}</span></p></div>
            <div className="UserSectionLine"><p>Description:</p></div>
            <div className="UserSectionLine"><p className="podcastInformationDisplayed">{podcast.description}</p></div>
          </div>
          <div className={"vr"} />
          <img className="profilePicture" alt="background" src="https://c0.anyrgb.com/images/434/137/recording-studio-person-woman-microphone-radio-podcast-talking-singing-presenter.jpg" />
          <br />
        </div>
        <hr></hr>
        <div className="PodcastsUser-wrap">
          <br />
          {editPodcastLink()}
        </div>
      </div>
    </>
  );
};
