import React, { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";
import { PodcastsUser } from "../../Components/PodcastsUser/PodcastsUser";
import { Buscador } from "../../Components/Buscador/Buscador";
import "./MyPodcasts.css";


export const MyPodcasts = () => {
    //const [modalShow, setModalShow] = React.useState(false);
  return (
      <> 
      <Buscador /> 
      <PodcastsUser />
      </>
  );
};
