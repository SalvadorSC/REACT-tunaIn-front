import React from "react";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import "./PodcastsDestacados.css";

export const PodcastsDestacados = () => {
  const ListaPodcastFake = [
    {
      title: "Soy el podcast 1",
      duration: 1.3,
      author: "Autor podcast 1",
    },
    {
      title: "Soy el podcast 2",
      duration: 2.3,
      author: "Autor podcast 2",
    },
    {
      title: "Soy el podcast 3",
      duration: 3.33,
      author: "Autor podcast 3",
    },
    {
      title: "Soy el podcast 4",
      duration: 3.33,
      author: "Autor podcast 4",
    },
    {
      title: "Soy el podcast 1",
      duration: 1.3,
      author: "Autor podcast 1",
    },
    {
      title: "Soy el podcast 2",
      duration: 2.3,
      author: "Autor podcast 2",
    },
    {
      title: "Soy el podcast 3",
      duration: 3.33,
      author: "Autor podcast 3",
    },
    {
      title: "Soy el podcast 4",
      duration: 3.33,
      author: "Autor podcast 4",
    },
  ];
  return (
    <div className="PodcastsDestados-wrap">
      {ListaPodcastFake.map(podcast => 
        (
        <PodcastCard
          title={podcast.title}
          duration={podcast.duration}
          author={podcast.author}
        />
      ))}
    </div>
  );
};
