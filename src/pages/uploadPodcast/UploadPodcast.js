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
 
  

  const fileInputEl = useRef(null);
  // Maneja el estado del formulario:

 
  const onTrackSelected = () => {
    const files = fileInputEl.current.files;
    const token = getToken();
    const decodedToken = DecodeToken(token);
    const url = `http://localhost:3300/track`;
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
        
        const options = {
            method: 'POST',
            body: formData,
            headers: {
              'Authorization':'Bearer ' + JSON.parse(token) 
            },
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
      <div>
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
        
        <input
          type="file"
          name="track"
          id="fileupload"
          accept=".mp3, audio/*"
          ref={fileInputEl}

        />{" "}
      
        <br />
        <Avisos flag={registerFail} />
        <div className="RegisterForm-dflex">
          <div>
            <button onClick={onTrackSelected} >Submit</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};
