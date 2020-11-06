import '../userProfile/UserProfile.css'
import React, { useEffect, useState } from "react";
import { serverRequest } from '../../hooks/urlBack';
import { getToken } from '../../util/LocalStorage.utils';

export const EditUserProfile = () => {
    //const [canales, setCanales] = useState("No tienes ningún canal")
    const [user, setUser] = useState({})
    const sitio = "data/user/";
    const id = '5fa4805beb15600cc545123c';
    //((`${url}+${id}`
    useEffect(() => {
        serverRequest(`${sitio}${id}`, 'GET')
        getToken
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(console.log);
    }, [id]);

    // Contiene los valores del formulario:
    const [editedUser, setEditedUser] = useState({});

    // Maneja el estado del formulario:
    const handleChanges = (event) => {
        // Recojo el name y el valor del input:
        const { value, name } = event.target;
        setEditedUser(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        // Prevengo que ser recargue la página:
        e.preventDefault();
        // Hago una petición post al servidor:
        serverRequest(`${sitio}${id}`, 'PUT', editedUser)
            .then(data => setUser(editedUser))

            .catch(console.log);
        // Reseteo los campos del formulario:
        e.target.reset();
    }

    // useEffect(() => {
    //     const bearer = 'Bearer ' + getToken();
    //     fetch((`${sitio}${id}`), {
    //         method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'cors', // no-cors, *cors, same-origin
    //         headers: {
    //             'Authorization': bearer,
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => setUser(data));
    // }, [id]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label id="name-label">Nombre Completo</label><br />
                <input name="nombre" type="text" onChange={handleChanges} placeholder={user.nombre} /><br />
                <label id="username-label">Username</label><br />
                <input name="username" type="text" placeholder={user.username} onChange={handleChanges} /><br />
                <label id="email-label">Email</label><br />
                <input name="email" type="email" placeholder={user.email} onChange={handleChanges} /><br />
                <label id="password-label">Password</label><br />
                <input name="password" type="password" placeholder={user.password} onChange={handleChanges} /><br />
                <label id="fechaNacimiento-label">Fecha de nacimiento</label><br />
                <input name="fechaNacimiento" type="date" onChange={handleChanges} /><br />
                <button>Save Changes</button>
            </form>
        </>
    )
}
