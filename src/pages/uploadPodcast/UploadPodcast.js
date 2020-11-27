import React, { useRef, useState } from "react";
import { getToken } from "../../util/LocalStorage.utils";
import { serverRequest } from "../../helpers/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { Avisos } from "../../Components/Avisos/Avisos";
import "./UploadPodcast.css";
export const UploadPodcast = ({ history }) => {
  // Contiene los valores del formulario:
  const [newPodcast, setNewPodcast] = useState({});
  const [registerFail, setRegisterFail] = useState(null);
  
  
  const [titleEl, setTitleEl] = useState(null);
  const [descriptionEl, setDescriptionEl] = useState(null);
  const [categoriesEl, setCategoriesEl] = useState(null);
  const [locationEl, setLocationEl] = useState(null);
  //Agafo el token per saber quin usuari està pujant el podcast
  const token = getToken();
  const decodedToken = DecodeToken(token);
  const userId = decodedToken.id;

  const fileInputEl = useRef(null);
  // Maneja el estado del formulario:
  

  const onTrackSelected = (files) => {
    const url = `http://localhost:3300/data/podcast`;
    const title = titleEl;
    const description = descriptionEl;
    const categories = categoriesEl;
    const location = locationEl;
    
    if (files) {
        const formData = new FormData();

        formData.append('track', files[0]);
        formData.append('name', title);
        formData.append('description', description);
        formData.append('categories', categories);
        formData.append('location', location);
        formData.append('userId', userId);
        const options = {
            method: 'POST',
            body: formData,
            headers: new Headers({}),
            mode: 'cors',
        };

        fetch(url, options)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then((payload) => {
                console.log(`Saved song with id: ${payload}`);
            })
            .catch((error) => console.log(error));
    }
};

  return (
    <div className="RegisterForm-wrap">
      <h1>¡Personaliza tu experiencia!</h1>
      <p className="registerForm-p">
        Disfruta de una experiencia sin interrupciones en todos los dispositivos
        y recomendaciones personalizadas basadas en tu escucha. (Solo toma 30
        segundos)
      </p>
      <form onSubmit={onTrackSelected}>
        <input
          name="title"
          type="text"
          placeholder="Titulo*"
          onChange={(e) => setTitleEl(e.target.value)}
          required
        />{" "}
        <input
          name="description"
          type="text"
          placeholder="Descripción*"
          onChange={(e) => setDescriptionEl(e.target.value)}
          required
        />{" "}
        <input
          name="categories"
          type="text"
          placeholder="Categorias*"
          onChange={(e) => setCategoriesEl(e.target.value)}
        />{" "}
        <input
          name="location"
          type="location"
          placeholder="Location*"
          onChange={(e) => setLocationEl(e.target.value)}
        />{" "}
        <label className="upload_button" htmlFor="fileupload">
        <input
          type="file"
          name="track"
          id="fileupload"
          accept=".mp3, audio/*"
          ref={fileInputEl}
          onChange={() =>onTrackSelected(fileInputEl.current.files)}

        />{" "}
        </label>
        <br />
        <Avisos flag={registerFail} />
        <div className="RegisterForm-dflex">
          <div>
            <button>Guardar</button>
          </div>
        </div>
      </form>
      
    </div>
  );
};
