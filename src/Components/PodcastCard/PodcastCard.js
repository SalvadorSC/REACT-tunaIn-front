import React from "react";

export const PodcastCard = ({ title, duration }) => {
  return (
    <div className="PodcastCard-wrap">
      <div className="PodcastCard-img"></div>
      <p>{title}</p>
      <p>{duration}</p>
      <i className="fas fa-share-alt" />
      <i className="far fa-play-circle" />
      <i class="far fa-heart"></i>
    </div>
  );
};
