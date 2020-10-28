import FormRegistro from "./FormRegistro";
import React from "react"

const openModal = () => {
    formRegistroRef.current.abrirForm();
};
const formRegistroRef = React.useRef();
return (
    <h2>register</h2>,
    <div className="register.form">
        <button onClick={openModal}>Regístrarte</button>
        <FormRegistro>
            <h3>¡Personaliza tu experiencia!</h3>
            <p>
                <span>Disfruta de una experiencia sin interrupciones en todos los dispositivos y recomendaciones personalizadas basadas en tu escucha. (Solo toma 30 segundos)</span>
            </p>
            <button onClick={() => formRegistroRef.current.cerrarForm()}>Regístrate</button>
        </FormRegistro>
    </div>
);
