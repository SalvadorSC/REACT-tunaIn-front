import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { serverRequest } from "../../helpers/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils";
import "./MyPodcasts.css";

export const MyPodcasts = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = getToken();
    const decodedToken = DecodeToken(token);
    const  userId = decodedToken.id;

    serverRequest(`data/user/${userId}`, "GET")
      .then((response) => {
        setUser(response);
      })
      .catch(console.log);
  }, []);

  const options = { month: "2-digit", day: "2-digit", year: "numeric" };

  return (
    <div className="UserProfile-wrap">
      <h1>Tu cuenta tunain</h1>
      <p>{user.nombre}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>Contraseña</p>
      {/* <p>{user.password}</p> */}
      <p>{new Date(user.fechaNacimiento).toLocaleString("es-ES", options)}</p>
      <Link
        to={{
          pathname: "/editUserProfile",
          state: {user},
        }}
      >
        <button>Editar perfil</button>
      </Link>
    </div>
  );
};
