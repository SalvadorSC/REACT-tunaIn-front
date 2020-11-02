import React, { useState } from 'react';
const user = {
    "nombre": "Jose",
    "password": "1234",
    "channel": "JoseRadio",
    "fechaNacimiento" : "17-11-2000",
    "genero" : "machoalfa",
}
export const EditUserProfile = () => {
    
    return (
        <>
            <div className="profile-picture-box">
                <img src="https://via.placeholder.com/150" alt="imagen" />
                <button>Change Pfp</button>
            </div>
            <h2>Name</h2><hr></hr>
            <h4>{user.nombre}</h4>
            <h2>Password</h2><hr></hr>
            <h4>{user.password}</h4>
            <h2>Canales</h2><hr></hr>
            <h4>{user.channel}</h4>
            <h2>Fecha de nacimiento </h2><hr></hr>
            <h4>{user.fechaNacimiento}</h4>
            <h2>Genero</h2><hr></hr>
            <h4>{user.genero}</h4>
        </>
    )
}
