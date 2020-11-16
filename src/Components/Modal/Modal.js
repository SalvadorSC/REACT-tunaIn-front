import React, { useState } from 'react';
import { ModalContent } from './ModalContent';
import { RegisterForm } from '../../pages/register/RegisterForm';

export const Modal = () => {
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
      <button type="button" onClick={handleOpen}>Registro en formato Modal</button>
      {openModal &&
        <ModalContent handleClose={handleClose}>
          <RegisterForm />
        </ModalContent>
      }
    </div>
  )
}
