import React, { useState } from 'react';
import './RegisterForm.css';

export const RegisterForm = () => {
    const [nombre, setNombre] = useState('nombre');
    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('password');
    const [fechaNacimiento, setFechaNacimiento] = useState('fechaNacimiento');
    const [genero, setGenero] = useState(null);

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleFechaNacimiento = (e) => {
        setFechaNacimiento(e.target.value);
    }

    const handleGenero = (e) => {
        setGenero(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            nombre,
            email,
            password,
            fechaNacimiento,
            genero
        }

        // const JSONdata = JSON.stringify(newUser);

        // fetch('http://localhost:3000/user/', {
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSONdata
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.log(error));

        // e.target.reset();

    }

    return (
        <>
            <h1>Formulario de registro</h1>
            <h3>¡Personaliza tu experiencia!</h3>
            <p className="registerForm-p">Disfruta de una experiencia sin interrupciones en todos los dispositivos y recomendaciones personalizadas basadas en tu escucha. (Solo toma 30 segundos)</p>
            <form onSubmit={handleSubmit}>
                <button className="registerForm-button registerForm-button-google">Continuar con Google</button>
                <button className="registerForm-button registerForm-button-facebook">Continuar con Facebook</button>
                <button className="registerForm-button registerForm-button-apple">Continuar con Apple</button>
                <input type="text" placeholder="Nombre completo*" onChange={handleNombre} required /> {/*value={nombre}*/}
                <input type="email" placeholder="Correo electrónico*" onChange={handleEmail} required /> {/*value={email}*/}
                <input type="password" placeholder="Contraseña*" onChange={handlePassword} required /> {/*value={password}*/}
                <input type="date" placeholder="Año de nacimiento (AAAA)*" onChange={handleFechaNacimiento} required /> {/*value={fechaNacimiento}*/}
                <div>
                    <input type="radio" name="genero" id="hombre" value="hombre" onChange={handleGenero} required />
                    <label htmlFor="hombre">Hombre</label>
                    <input type="radio" name="genero" id="mujer" value="mujer" onChange={handleGenero} required />
                    <label htmlFor="mujer">Mujer</label>
                    <input type="radio" name="genero" id="otro" value="otro" onChange={handleGenero} required />
                    <label htmlFor="otro">Otro</label>
                </div>
                <br />
                <button >Regístrate</button>
            </form>

        </>
    )
}
