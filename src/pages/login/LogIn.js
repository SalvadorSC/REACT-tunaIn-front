import React, { useState } from "react";
import { Link } from "react-router-dom";
import { serverRequest } from "../../helpers/urlBack";
import { setJWT } from "../../util/LocalStorage.utils";
import { Avisos } from "../../Components/Avisos/Avisos";
import { PROFILE } from "../../routes/routes";
import {Button} from '../../Components/ButtonFlex/ButtonFlex';
import "./LogIn.css";

export const LogIn = ({ history }) => {

  // Contiene los valores del formulario:
  const [loginUser, setLoginUser] = useState({});
  const [loginFail, setLoginFail] = useState({ message: null, color: null });

  // Maneja el estado del formulario:
  const handleInputs = (event) => {
    // Recojo el name y el valor del input:
    const { value, name } = event.target;
    setLoginUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevengo que ser recargue la página:
    e.preventDefault();
    // Hago una petición post al servidor:
    serverRequest("login", "POST", loginUser)
      .then((response) => {
        //guardar el token en el localStorage en un campo llamado token:
        setJWT(response.token);
        //mensaje success
        setLoginFail({ message: "Bienvenido de nuevo", color: 'success' });
        setTimeout(() => {
          history.push(PROFILE);
        }, 2000);
      })
      .catch((response) => {
        setLoginFail({ message: response.message, color: 'error' });
      });
    // Reseteo los campos del formulario:
    e.target.reset();
  };

  return (
    <div className="Login-wrap">
      <h1>¡Hola de nuevo!</h1>
      <p className="Login-p">
        Accede a tu cuenta para escuchar tus podcasts favoritos.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico*"
          onChange={handleInputs}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña*"
          onChange={handleInputs}
          required
        />

        <Avisos flag={loginFail.message} type={loginFail.color} />

        <div className="Login-dflex">
          <div className="a-register">
            <span>¿Aún no eres miembro?</span>
            <Link to="/register">Regístrate</Link>
          </div>
          <div>
            <Button>Acceder</Button>
          </div>
        </div>

        <span className="Login-terminos">
          Al iniciar sesión, aceptas nuestros{" "}
          <Link to="/terms">Términos de Servicio y Política de Privacidad</Link>
        </span>

      </form>
    </div>
  );
};
