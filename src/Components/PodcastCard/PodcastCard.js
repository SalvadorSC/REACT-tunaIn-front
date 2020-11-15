import React from "react";
import './PodcastCard.css';

export const PodcastCard = ( {title, duration, author, img} ) => {
  return (
    <div className="PodcastCard-wrap">
      <div style={{backgroundImage: `url(${img})`}} className="PodcastCard-img">
        {/* <img src={img} alt={title} /> */}
      </div>
        <div className="icon-wrapper">
          <i className="fas fa-ellipsis-h icon-mini" />
          <i className="fas fa-play play-icon"></i>
          <i className="far fa-heart" />
        </div>
      <div className="PodcastCard-text">
        <p className="PostcastCard-title">{title}</p>
        <p className="PostcastCard-author">{author}</p>
        <p className="PostcastCard-duration">{duration}</p>
      </div>
    </div>
  );
};
