import React from "react";
import "./PodcastList.css";
import { PodcastsUser } from "../../Components/PodcastsUser/PodcastsUser";
import { Buscador } from "../../Components/Buscador/Buscador";


export const PodcastList = () => {
  return (
    <>
      <Buscador />
      <PodcastsUser />
    </>
  );
};
