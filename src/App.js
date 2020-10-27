import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormRegistro from "./FormRegistro";


function App() {
  const formRegistroRef = React.useRef();

  const openModal = () => {
    formRegistroRef.current.abrirForm();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={openModal}>Regístrarte</button>
        <FormRegistro>
          <h3>¡Personaliza tu experiencia!</h3>
          <p>
            <span>Disfruta de una experiencia sin interrupciones en todos los dispositivos y recomendaciones personalizadas basadas en tu escucha. (Solo toma 30 segundos)</span>
          </p>
          <button onClick={() => formRegistroRef.current.cerrarForm()}>Regístrate</button>
        </FormRegistro>
      </header>
    </div>
  );
}

export default App;
