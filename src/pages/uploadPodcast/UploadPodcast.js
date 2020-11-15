import React, { useState } from "react";
import { Link } from "react-router-dom";
import { serverRequest } from "../../helpers/urlBack";
import { setJWT } from "../../util/LocalStorage.utils";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils";
import { Avisos } from "../../Components/Avisos/Avisos";
import "./UploadPodcast.css";

export const UploadPodcast = ({ history }) => {
  // Contiene los valores del formulario:
  const [newPodcast, setNewPodcast] = useState({});
  const [registerFail, setRegisterFail] = useState(null);
  // Maneja el estado del formulario:
  const handleInputs = (event) => {
    // Recojo el name y el valor del input:
    const { value, name } = event.target;
    setNewPodcast((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    // Prevengo que ser recargue la página:
    e.preventDefault();
    const token = getToken();
    const decodedToken = DecodeToken(token);
    const userId = decodedToken.id;
    const newPodcastWithUserID = {
      ...newPodcast,
      "id_author": userId
    }
    // Hago una petición post al servidor:
    serverRequest("data/podcast", "POST", newPodcastWithUserID)
      .then((response) => {
        if (response.ok) { history.push("/home"); }
        //guardar el token en el localStorage en un campo llamado token:
        else { throw Error(response) }
      })
      .catch((response) => setRegisterFail(response.error));
    // Reseteo los campos del formulario:
    //e.target.reset();
  };

  return (
    <div className="RegisterForm-wrap">
      <h1>¡Personaliza tu experiencia!</h1>
      <p className="registerForm-p">
        Disfruta de una experiencia sin interrupciones en todos los dispositivos
        y recomendaciones personalizadas basadas en tu escucha. (Solo toma 30
        segundos)
      </p>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Titulo*"
          onChange={handleInputs}
          required
        />{" "}
        <input
          name="description"
          type="text"
          placeholder="Descripción*"
          onChange={handleInputs}
          required
        />{" "}
        <input
          name="categories"
          type="text"
          placeholder="Categorias*"
          onChange={handleInputs}
        />{" "}
        <input
          name="location"
          type="location"
          placeholder="Location*"
          onChange={handleInputs}
        />{" "}
        <input
          name="audio"
          type="file"
          onChange={handleInputs}

        />{" "}
        <br />
        <Avisos flag={registerFail} />
        <div className="RegisterForm-dflex">
          <div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
