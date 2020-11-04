import React from 'react'
import {useState} from 'react'   

const user = {
    "nombre": "Jose",
    "username": "Jose17SV",
    "email": "user@gmail.com",
    "password": "1234",
    "channel": "JoseRadio",
    "fechaNacimiento": "2000",
}
export const EditUserProfile = () => {
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
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={user.nombre} onChange={handleNombre} required /> {/*value={nombre}*/}
                <input type="email" placeholder={user.email} onChange={handleEmail} required /> {/*value={email}*/}
                <input type="password" placeholder={user.password} onChange={handlePassword} required /> {/*value={password}*/}
                <input type="date" placeholder="Año de nacimiento (AAAA)*" onChange={handleFechaNacimiento} required /> {/*value={fechaNacimiento}*/}
                <input type="number" min="1900" max="2100" step="1" placeholder="Año de nacimiento (AAAA)*" onChange={handleFechaNacimiento} required /> {/*value={fechaNacimiento}*/}
                <div>
                    <input type="radio" name="genero" id="hombre" value="hombre" onChange={handleGenero} required />
                    <label htmlFor="hombre">Hombre</label>
                    <input type="radio" name="genero" id="mujer" value="mujer" onChange={handleGenero} required />
                    <label htmlFor="mujer">Mujer</label>
                    <input type="radio" name="genero" id="otro" value="otro" onChange={handleGenero} required />
                    <label htmlFor="otro">Otro</label>
                </div>
                <br />
            </form>
            
            <label id="name-label">Nombre Completo</label><br />
            <input type="text" class="text-input" id="name" name="name" placeholder={user.nombre}></input><br />
            <label id="fecha-label">Fecha de nacimiento</label><br />
            <input type="date" class="text-input" id="name" name="name"></input><br />
            <label id="password-label">Password</label><br />
            <input type="text" class="text-input" id="name" name="name" placeholder={user.password}></input><br />

        </>
    )
}
