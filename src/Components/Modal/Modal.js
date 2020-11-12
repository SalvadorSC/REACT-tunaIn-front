import React, { useState } from 'react'
import { ModalMessage } from '../ModalMessage/ModalMessage';

export const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  
  const handleOpen = () => {
    setOpenModal(true);
  }
  
  const handleClose = () => {
    setOpenModal(false);
  }

  return (
    <div className="App" openModal={openModal}>
      <button type="button" onClick={handleClose}>
        <i class="fas fa-times" />
      </button>
      <div>
        <h3>Soy el título del modal</h3>
        <icon></icon>
        <i class="far fa-check-circle"></i>
        <p>Soy el mensaje del modal. Debo incluir un mensaje</p>
      </div>
    </div>
  
  )
}
