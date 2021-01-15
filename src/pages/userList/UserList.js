import React from "react";
import "./UserList.css";
import { Buscador } from "../../Components/Buscador/Buscador";
import { UserCard } from "../../Components/UserCard/UserCard";
import { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";
import { Link, useHistory } from "react-router-dom";

export const UserList = () => {
  let history = useHistory();
  const [listaUsers, setListaUsers] = useState([]);
  const url = window.location.href;
  useEffect(() => {
    serverRequest(`data/user/`, "GET")
      .then((response) => {
        setListaUsers(response)
      })
      .catch(console.log);
  }, [url]);
  

  

  return (
    <>
      <Buscador />
      <div className="PodcastsUser-wrap">
        {listaUsers.map(user =>
        (
          <>
          <UserCard
            userId={user._id}
            nombre={user.nombre}
            username={user.username}
            email={user.email}
            img={"https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"}
          />
          </>
        ))}
      </div>


    </>
  );
};
