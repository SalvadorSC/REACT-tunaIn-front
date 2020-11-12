import React, { useState } from 'react';
import { ModalContent } from './ModalContent';
import { RegisterForm } from '../../pages/register/RegisterForm';

export const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  
  const handleOpen = () => {
    setOpenModal(!openModal);
  }
  
  const handleClose = () => {
    setOpenModal(!openModal);
  }

  return (
    <div>
      <button type="button" onClick={handleOpen}>Open Modal</button>
  {openModal && <ModalContent handleClose={handleClose}>
    <RegisterForm />
  </ModalContent>}
    </div>
  )
}
