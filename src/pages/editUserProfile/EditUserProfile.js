import React, { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";
import "./EditUserProfile.css";
import { Avisos } from "../../Components/Avisos/Avisos";
import { HOME } from "../../routes/routes";
import { Modal } from "../../Components/Modal/Modal";

export const EditUserProfile = (props) => {
  // const [canales, setCanales] = useState("No tienes ningún canal");
  const [user, setUser] = useState({});
  const [editedUser, setEditedUser] = useState({});
  // const [deletedUser, setDeletedUser] = useState({});
  const [newPass, setNewPass] = useState({});
  const [newPassRepe, setNewPassRepe] = useState({});
  const [editFailed, setEditFailed] = useState({ message: null, color: null });
  const [deleteFailed, setDeleteFailed] = useState({ message: null, color: null });
  const [openModal, setOpenModal] = useState(false);
  const sitio = "data/user";

  const handleOpen = (e) => {
    setOpenModal(!openModal);
  }

  const handleClose = (e) => {
    const { className: el } = e.target;
    if (el !== 'backdrop' && el !== 'fas fa-times') return;
    setOpenModal(!openModal);
  }

  //Recoje los datos del usuario del fetch realizado en userProfile
  useEffect(() => {
    setUser(props.location.state.user);
  }, []);

  // Maneja el estado del formulario:
  const handleChanges = (event) => {
    const { value, name } = event.target;
    setEditedUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // Maneja el estado del input newPass
  const handleNewPass = (e) => {
    setNewPass(e.target.value);
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    serverRequest(`${sitio}/${user._id}`, "PUT", editedUser)
      .then((response) => {
        setUser(response);
        setEditFailed({ message: "Perfil actualizado correctamente", color: 'success' });
        setTimeout(() => {
          setEditFailed({ message: null, color: null })
        }, 3000)
      })
      .catch((response => setEditFailed({ message: response.message, color: 'error' })));
    e.target.reset();
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    console.log(editedUser.password);
    serverRequest(`${sitio}/${user._id}`, "PUT", editedUser)
      .then((response) => {
        setUser(response);
        setEditFailed({ message: "Perfil actualizado correctamente", color: 'success' });
      })
      .catch((response => setEditFailed({ message: response.message, color: 'error' })));
    e.target.reset();
  };

  // eliminar mi cuenta de usuario
  const handleDelete = (e) => {
    e.preventDefault();
    // Hago una petición post al servidor con el metodo "DELETE"
    serverRequest(`${sitio}/${user._id}`, "DELETE")
      .then(response => console.log)
      .catch((response) => {
        setDeleteFailed({ message: "Perfil eliminado", color: 'warning' })
        setTimeout(() => {
          props.history.push(HOME);
        }, 2000);
      });
  };

  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  const fecha = new Date(user.fechaNacimiento).toLocaleString("es-ES", options);

  return (
    <div className="EditUserProfile-wrap">
      <h1>Edita tu perfil</h1>
      <form onSubmit={handleSubmit}>
        <label id="name-label">Nombre Completo</label>
        <input
          name="nombre"
          type="text"
          onChange={handleChanges}
          placeholder={user.nombre}
        />
        <label id="username-label">Username</label>
        <input
          name="username"
          type="text"
          placeholder={user.username}
          onChange={handleChanges}
        />
        <label id="fechaNacimiento-label">Fecha de nacimiento {fecha}</label>
        <input name="fechaNacimiento" type="date" onChange={handleChanges} />
        <label id="email-label">Email</label>
        <input
          name="email"
          type="email"
          placeholder={user.email}
          onChange={handleChanges}
        />
        <label id="password-label">Password</label>
        {/* <button className="button-change-pss">Cambiar contraseña</button> */}
        {/* <ModalCambiarPassword /> */}
        <button type="button" onClick={handleOpen} className="button-change-pss">Cambiar contraseña</button>

        {openModal &&
          <Modal handleClose={handleClose}>
            <form onSubmit={handleSubmitPassword}>
              <input
                name="password"
                type="password"
                placeholder='Nueva contraseña*'
                onChange={handleNewPass}
                required
              />
              <input
                name="password"
                type="password"
                placeholder='Repite la nueva contraseña*'
                onChange={handleChanges}
                required
              />
              {(newPass !== editedUser.password) ? <p>*Las contraseñas no coinciden</p> : <button onClick={handleClose}>Guardar contraseña</button>}
              <Avisos flag={editFailed.message} type={editFailed.color} />
            </form>
          </Modal>
        }
        <br />
        <Avisos flag={editFailed.message} type={editFailed.color} />
        <button>Guardar cambios</button>
      </form>

      <form onSubmit={handleDelete}>
        <button className="button-delete">Eliminar cuenta</button>
        <Avisos flag={deleteFailed.message} type={deleteFailed.color} />
      </form>
    </div>
  );
};
