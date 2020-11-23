import React from "react";
import './PodcastCard.css';
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";


export const PodcastCard = ({ title, categories, author, img, podcastId, description }) => {

  const [podcastWrapClass, setPodcastWrapClass] = useState();
  const url = window.location.href;
  let history = useHistory();

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
        <i className="fas fa-ellipsis-h icon-mini" />
        <i className="fas fa-play play-icon"></i>
        <i className="far fa-heart" />
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
