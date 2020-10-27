import React, { forwardRef, useImperativeHandle } from "react";
import "./FormRegistro.css";
import ReactDOM from "react-dom";

const FormRegistro = forwardRef((props, ref) => {
  const [mostrar, setMostrar] = React.useState(true);
  useImperativeHandle(ref, () => {
    return {
      abrirForm: () => abrir(),
      cerrarForm: () => cerrar(),
    }
  })
  const abrir = () => {
    setMostrar(true)
  }
  const cerrar = () => {
    setMostrar(false)
  }

  if (mostrar) {
    return ReactDOM.createPortal(
      <div className="FormRegistro-modal-wrapper">
        <div className="modal-backdrop" />
        <div className="FormRegistro-modal-box">
          {/* modificar */}
          {props.children}
        </div>
      </div>, document.getElementById("FormRegistro-root"))
  }
  return null;
});

export default FormRegistro;
