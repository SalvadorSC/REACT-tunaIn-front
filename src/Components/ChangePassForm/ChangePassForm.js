import React, { useState } from 'react';
import { serverRequest } from "../../helpers/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils";

export const ChangePassForm = () => {
    const token = getToken();
    const decodedToken = DecodeToken(token);
    const userId = decodedToken.id;
    const [user, setUser] = useState({});
    const [newPss, setNewPss] = useState({});
    const [repeatNewPss, setRepeatNewPss] = useState({});
    const sitio = "data/user";

    // Maneja el estado del formulario:
    const handleNewPss = (e) => {
        setNewPss(e.target.value);
    };

    const handleNewPssRepeated = (e) => {
        setRepeatNewPss(e.target.value);
    };

    const handleSubmit = (e) => {
        // Prevengo que ser recargue la página:
        e.preventDefault();
        // Hago una petición post al servidor:
        serverRequest(`${sitio}/${userId}`, "PUT", newPss)
            .then((response) => setUser(response))
            .catch(console.log);
        // Reseteo los campos del formulario:
        e.target.reset();
    };

    return (
        <div className="ChangePss-wrap">
            <h3>Cambia tu contraseña</h3>
            <form onSubmit={handleSubmit}>
                <input
                    name="password"
                    type="password"
                    placeholder='Nueva contraseña*'
                    onChange={handleNewPss}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder='Repite la nueva contraseña*'
                    onChange={handleNewPssRepeated}
                    required
                />
                {(newPss !== repeatNewPss) ? <p>Las contraseñas no coinciden</p> : <button>Guardar contraseña</button>}
            </form>
        </div>
    );
}
