import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { serverRequest } from "../../hooks/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils";
import "./UserProfile.css";

export const UserProfile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = getToken();
    const decodedToken = DecodeToken(token);
    const userId = decodedToken.id;

    serverRequest(`data/user/${userId}`, "GET")
      .then((response) => {
        setUser(response);
      })
      .catch(console.log);
  }, []);

  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  /*
        //const [canales, setCanales] = useState("No tienes ningún canal")
        const [user, setUser] = useState({})
        const url = "http://localhost:3000/data/user/";
        const id = '5fa47b8ef73fa9088fd050de';
        //((`${url}+${id}`
        useEffect(() => {
            const bearer = 'Bearer ' + getToken();
            fetch((`${url}${id}`), {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
                .then(response => response.json())
                .then(data => setUser(data));
        }, [id]);
    */
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
        to={"/editUserProfile"}
        // to={{
        //   pathname: "/editUserProfile",
        //   state: {
        //     fromNotifications: true,
        //   },
        // }}
      >
        <button>Editar perfil</button>
      </Link>
    </div>
  );
};
