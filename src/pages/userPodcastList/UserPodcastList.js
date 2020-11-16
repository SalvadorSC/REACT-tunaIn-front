import React, { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";
import "./UserPodcastList.css";
import { PodcastsUser } from "../../Components/PodcastsUser/PodcastsUser";
import { Buscador } from "../../Components/Buscador/Buscador";


export const UserPodcastList = () => {
    //const [modalShow, setModalShow] = React.useState(false);
  return (
      <> 
      <Buscador /> 
      <PodcastsUser />
      </>
  );
};
