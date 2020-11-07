import React, { useState } from "react";
import "./LogIn.css";
import "../../Components/EstiloErrores/EstiloError.css";
import { serverRequest } from "../../hooks/urlBack";
import { setJWT } from "../../util/LocalStorage.utils";
import { MensajeError } from "../../Components/MensajeError/MensajeError";

export const LogIn = ({ history }) => {
  // Contiene los valores del formulario:
  const [loginUser, setLoginUser] = useState({});
  const [loginFail, setLoginFail] = useState(null);
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
        history.push("/profile");
      })
      .catch((response) => setLoginFail(response.message));
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
        />{" "}
        {/*value={email}*/}
        <input
          name="password"
          type="password"
          placeholder="Contraseña*"
          onChange={handleInputs}
          required
        />{" "}
        {/*value={password}*/}
        <br />
        <MensajeError flag={loginFail} />
        <button>Acceder</button>
      </form>
    </div>
  );
};
