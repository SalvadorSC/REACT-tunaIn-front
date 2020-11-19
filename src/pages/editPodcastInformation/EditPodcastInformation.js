import React, { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";
import "./EditPodcastInformation.css";
import { Avisos } from "../../Components/Avisos/Avisos";
import { HOME, MYPODCASTS } from "../../routes/routes";
import { Modal } from "../../Components/Modal/Modal";
import { setJWT } from "../../util/LocalStorage.utils";
import { Link, useHistory, useParams } from "react-router-dom";
import { MyPodcasts } from "../myPodcasts/MyPodcasts";


export const EditPodcastInformation = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const [podcast, setPodcast] = useState({});
  const [editedPodcast, setEditedPodcast] = useState({});
  const [editFailed, setEditFailed] = useState({ message: null, color: null });
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [deleteFailed, setDeleteFailed] = useState({ message: null, color: null });


  const sitio = "data/podcast";
  let { podcastId } = useParams();

  useEffect(() => {
    serverRequest(`data/podcast/${podcastId}`, "GET")
      .then((response) => {
        setPodcast(response)
      })
      .catch(console.log);
  }, []);

  const handleCloseDelete = (e) => {
    const { className: el } = e.target;
    if (el !== 'backdrop' && el !== 'fas fa-times') return;
    setOpenModalDelete(!openModalDelete);
  }
  const handleOpenDelete = () => setOpenModalDelete(!openModalDelete);


  const handleSubmit = (e) => {
    e.preventDefault();
    serverRequest(`${sitio}/${podcastId}`, "PUT", editedPodcast)
      .then((response) => {
        console.log(response)
        setPodcast(response);
        setEditFailed({ message: "Podcast actualizado correctamente", color: 'success' });
        setTimeout(() => {
          setEditFailed({ message: null, color: null })
        }, 3000)
      })
      .catch((response => setEditFailed({ message: response.message, color: 'error' })));
    e.target.reset();
  };

  const handleInputs = (event) => {
    // Recojo el name y el valor del input:
    const { value, name } = event.target;
    setEditedPodcast((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };


  // eliminar mi cuenta de usuario
  const handleDelete = (e) => {
    e.preventDefault();
    serverRequest(`${sitio}/${podcastId}`, "DELETE")
      .then(response => console.log)
      .catch((response) => {
        setDeleteFailed({ message: "Podcast eliminado", color: 'warning' })
        setTimeout(() => {
          history.push(MYPODCASTS);
        }, 2000);
      });
  };


  return (
    <div className="EditUserProfile-wrap">
      <h1>Edita tu podcast</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder={podcast.title}
          onChange={handleInputs}
          required
        />
        <input
          name="categories"
          type="text"
          placeholder={podcast.categories}
          onChange={handleInputs}
          required
        />
        <input
          name="description"
          type="text"
          placeholder={podcast.description}
          onChange={handleInputs}
          required
        />
        <button>Guardar cambios</button>  
      </form>

      <button type="button" onClick={handleOpenDelete} className="button-delete">Eliminar Podcast</button>
      {openModalDelete &&
        <Modal handleClose={handleCloseDelete}>
          <h3>Eliminar podcast</h3>
          <p>¿Estás seguro que quieres eliminar este podcast?</p>
           <button onClick={handleDelete} className="button-confirm-delete">Eliminar</button>
          <button onClick={handleOpenDelete} className="button-tunain">Cancelar</button>
          <Avisos flag={deleteFailed.message} type={deleteFailed.color} />
        </Modal>
      }
    </div>
  );
};
