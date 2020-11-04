import React, { useState } from 'react';
import './LogIn.css';

export const LogIn = () => {
    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('password');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const accesoUser = {
            email,
            password,
        }
        console.log(accesoUser);
    }

    return (
        <div className="Login-wrap">
            <h1>¡Hola de nuevo!</h1>
            <p className="Login-p">Bienvenido de nuevo, accede a tu cuenta para escuchar tus podcasts favoritos.</p>
            <form onSubmit={handleSubmit}>
                <button className="Login-button Login-button-google">Continuar con Google</button>
                <button className="Login-button Login-button-facebook">Continuar con Facebook</button>
                <button className="Login-button Login-button-apple">Continuar con Apple</button>
                <input type="email" placeholder="Correo electrónico*" onChange={handleEmail} required /> {/*value={email}*/}
                <input type="password" placeholder="Contraseña*" onChange={handlePassword} required /> {/*value={password}*/}

                <br />
                <button >Acceder</button>
            </form>

        </div>
    )
}
