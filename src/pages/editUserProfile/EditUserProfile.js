import React, { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";
import "./EditUserProfile.css";
import swal from 'sweetalert';


export const EditUserProfile = (props) => {
  // const [canales, setCanales] = useState("No tienes ningún canal");
  const [user, setUser] = useState({});
  const [editedUser, setEditedUser] = useState({});
  const [deletedUser, setDeletedUser] = useState({});
  const sitio = "data/user";

  useEffect(() => {
    setUser(props.location.state.user);
    // console.log(props.location.state.user);
  }, []);

  // Maneja el estado del formulario:
  const handleChanges = (event) => {
    // Recojo el name y el valor del input:
    const { value, name } = event.target;
    setEditedUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevengo que ser recargue la página:
    e.preventDefault();
    // Hago una petición post al servidor:
    serverRequest(`${sitio}/${user._id}`, "PUT", editedUser)
      .then((response) => setUser(response))
      .catch(console.log);
    // Reseteo los campos del formulario:
    e.target.reset();
  };


  // eliminar mi cuenta de usuario
  const handleDelete = (e) => {
    e.preventDefault();
    // Hago una petición post al servidor con el metodo "DELETE"
    serverRequest(`${sitio}/${user._id}`, "DELETE", deletedUser)
    
      .then((response) => setDeletedUser(response))
     
      .catch(console.log);
    
 
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
        <button className="button-change-pss">Cambiar contraseña</button>
        <br />
        <button>Guardar cambios</button>
      </form>



      <form onSubmit={handleDelete}>
        <button className="button-delete">Eliminar cuenta</button>
      </form> 
    </div>
  );
};
