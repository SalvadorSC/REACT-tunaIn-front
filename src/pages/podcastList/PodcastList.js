import React, { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";
import "./PodcastList.css";
import { PodcastsUser } from "../../Components/PodcastsUser/PodcastsUser";
import { Buscador } from "../../Components/Buscador/Buscador";


export const PodcastList = () => {
    //const [modalShow, setModalShow] = React.useState(false);
  return (
      <> 
      <Buscador /> 
      <PodcastsUser />
      </>
  );
};
