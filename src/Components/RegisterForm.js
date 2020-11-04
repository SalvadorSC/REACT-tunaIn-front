import React, { useState } from 'react';
import './RegisterForm.css';
import { serverRequest } from './urlBack';

export const RegisterForm = () => {
    // Contiene los valores del formulario:
    const [newUser, setNewUser] = useState({});

    // Maneja el estado del formulario:
    const handleInputs = (event) => {
        // Recojo el name y el valor del input:
        const { value, name } = event.target;
        setNewUser(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        // Prevengo que ser recargue la página:
        e.preventDefault();
        // Hago una petición post al servidor:
        serverRequest('register', 'POST', newUser)
            .then(token => {
                console.log(token);
                //guardar el token en el localStorage en un campo llamado token:
                localStorage.setItem('token', token);
            })
            .catch(console.log)
        // Reseteo los campos del formulario:
        e.target.reset();
        console.log(newUser);
    }

    return (
        <div className="RegisterForm-wrap">
            <h1>¡Personaliza tu experiencia!</h1>
            <p className="registerForm-p">Disfruta de una experiencia sin interrupciones en todos los dispositivos y recomendaciones personalizadas basadas en tu escucha. (Solo toma 30 segundos)</p>
            <form onSubmit={handleSubmit}>
                <input name="nombre" type="text" placeholder="Nombre completo*" onChange={handleInputs} required /> {/*value={nombre}*/}
                <input name="username" type="text" placeholder="Nombre de usuario*" onChange={handleInputs} required /> {/*value={nombre}*/}
                <input name="email" type="email" placeholder="Correo electrónico*" onChange={handleInputs} required /> {/*value={email}*/}
                <input name="password" type="password" placeholder="Contraseña*" onChange={handleInputs} required /> {/*value={password}*/}
                <input name="fechaNacimiento" type="date" placeholder="Año de nacimiento (AAAA)*" onChange={handleInputs} required /> {/*value={fechaNacimiento}*/}
                <div>
                    <input type="radio" name="genero" value="hombre" onChange={handleInputs} required />
                    <label htmlFor="hombre">Hombre</label>
                    <input type="radio" name="genero" value="mujer" onChange={handleInputs} required />
                    <label htmlFor="mujer">Mujer</label>
                    <input type="radio" name="genero" value="otro" onChange={handleInputs} required />
                    <label htmlFor="otro">Otro</label>
                </div>
                <br />
                <button>Regístrate</button>
            </form>

        </div>
    )
}
