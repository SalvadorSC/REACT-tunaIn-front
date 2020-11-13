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
  ];
  return (
    <>
      <PodcastCard />
      {ListaPodcastFake.map((podc) => {
        <PodcastCard
          title={podc.title}
          duration={podc.duration}
          author={podc.author}
        />;
      })}
    </>
  );
};
