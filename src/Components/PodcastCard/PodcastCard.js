import React from "react";
import './PodcastCard.css';

export const PodcastCard = ( {title, duration, author} ) => {
  return (
    <div className="PodcastCard-wrap">
      <div className="PodcastCard-img">
        <i className="fas fa-share-alt icon" />
        <i class="fas fa-play fa-2x icon"></i>
        <i className="far fa-heart icon" />
      </div>
      <div className="PodcastCard-text">
        <p className="PostcastCard-title">{title}</p>
        <p className="PostcastCard-author">{author}</p>
        <p className="PostcastCard-duration">{duration}</p>
      </div>
    </div>
  );
};
