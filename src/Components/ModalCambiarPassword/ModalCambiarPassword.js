import React, { useState } from 'react';
import { ModalContentPss } from './ModalContentPss';
import { ChangePassForm } from '../ChangePassForm/ChangePassForm';
import './ModalCambiarPassword.css';

export const ModalCambiarPassword = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (e) => {
    setOpenModal(!openModal);
  }

  const handleClose = (e) => {
    const { className: el } = e.target;
    if (el !== 'backdrop' && el !== 'fas fa-times') return;
    setOpenModal(!openModal);
  }

  return (
    <div>
      <button type="button" onClick={handleOpen} className="button-change-pss">Cambiar contraseña</button>
      {openModal &&
        <ModalContentPss handleClose={handleClose}>
          <ChangePassForm />
        </ModalContentPss>
      }
    </div>
  )
}
