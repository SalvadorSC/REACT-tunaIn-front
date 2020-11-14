import React from "react";
import './PodcastCard.css';

export const PodcastCard = ( {title, duration, author} ) => {
  return (
    <div className="PodcastCard-wrap">
      <div className="PodcastCard-img">
        <i className="fas fa-share-alt icons" />
        <i className="far fa-play-circle icons" />
        <i className="far fa-heart icons" />
      </div>
      <div className="PodcastCard-text">
        <p className="PostcastCard-title">{title}</p>
        <p className="PostcastCard-author">{author}</p>
        <p className="PostcastCard-duration">{duration}</p>
      </div>
    </div>
  );
};
