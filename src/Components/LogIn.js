import React, { useState } from 'react';
import './LogIn.css';
import { serverRequest } from './urlBack';
import { setJWT } from '../util/LocalStorage.utils'

export const LogIn = () => {
    // Contiene los valores del formulario:
    const [loginUser, setLoginUser] = useState({});
    // Maneja el estado del formulario:
    const handleInputs = (event) => {
        // Recojo el name y el valor del input:
        const { value, name } = event.target;
        setLoginUser(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        // Prevengo que ser recargue la página:
        e.preventDefault();
        // Hago una petición post al servidor:
        serverRequest('login', 'POST', loginUser)
            .then(response => {
                //guardar el token en el localStorage en un campo llamado token:
                setJWT(response.token);
            })
            .catch(console.log)
        // Reseteo los campos del formulario:
        e.target.reset();

    }

    return (
        <div className="Login-wrap">
            <h1>¡Hola de nuevo!</h1>
            <p className="Login-p">Accede a tu cuenta para escuchar tus podcasts favoritos.</p>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="Correo electrónico*" onChange={handleInputs} required /> {/*value={email}*/}
                <input name="password" type="password" placeholder="Contraseña*" onChange={handleInputs} required /> {/*value={password}*/}
                <br />
                <button >Acceder</button>
            </form>
        </div>
    )
}
