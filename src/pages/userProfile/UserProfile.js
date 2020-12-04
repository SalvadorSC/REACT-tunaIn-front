import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { serverRequest } from "../../helpers/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils";
import { PodcastsUser } from "../../Components/PodcastsUser/PodcastsUser";
import "./UserProfile.css";
import { Footer } from "../../Components/Footer/Footer";
import {Button} from '../../Components/ButtonFlex/ButtonFlex';

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

  return (
    <div>
      <header className="header">
          <h1>Tu cuenta tunain</h1>
          <p>Personaliza tus datos y controla todos los detalles de tus podcasts.</p>
        </header>
        <body>
        <div className="UserProfile-wrap">
        <br/>
        
        <div className="UserCard-wrap">
          <div className="BackgroundImage"></div>
          <h2>Perfil de usuario</h2>
        
                <div className="Columns">

                    <img className="RoundAvatar" alt="background" src="https://c0.anyrgb.com/images/434/137/recording-studio-person-woman-microphone-radio-podcast-talking-singing-presenter.jpg"/>
                    <br/>
                    <br/>
                    <div className="UserSectionLine"><h5>Nombre </h5> <p>{user.nombre}</p></div>
                    <hr/>
                    <div className="UserSectionLine"><h5>Apellido </h5> <p>{user.username}</p></div>
                    <hr/>
                    <div className="UserSectionLine"><h5>Email </h5> <p>{user.email}</p></div>
                    <hr/>
                    <div className="UserSectionLine"><h5>Fecha de nacimiento </h5> <p>{new Date(user.fechaNacimiento).toLocaleString("es-ES", options)}</p></div>
                </div>

                <Link
                  to={{
                    pathname: "/editUserProfile",
                    state: {user},
                  }}
                >
                  <Button>Editar perfil</Button>
                </Link>
                <br/> 
              </div>  
              <br/> 
                <div className="UserCard-wrap">
                <h2>Tus podcasts subidos</h2>
                <br/>
                  <PodcastsUser />
                  <br/>
                </div>
                <br/>
                <br/>
              </div>
              </body>
    <Footer/>
      </div>
  );
};
