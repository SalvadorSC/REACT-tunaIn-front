import React from "react";
import { PodcastsUser } from "../../Components/PodcastsUser/PodcastsUser";
import { Buscador } from "../../Components/Buscador/Buscador";
import "./MyPodcasts.css";


export const MyPodcasts = () => {
  return (
    <>
      <Buscador />
      <PodcastsUser />
    </>
  );
};
