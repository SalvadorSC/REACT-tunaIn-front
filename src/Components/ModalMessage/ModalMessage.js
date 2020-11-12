import React from 'react'

export const ModalMessage = ({openModal, handleClose}) => {
  return (
    <>
    <button type="button" onClick={handleClose}>
    <i class="fas fa-times" />
  </button>
  <div>
    <h3>Soy el título del modal</h3>
    <icon></icon>
    <i class="far fa-check-circle"></i>
    <p>Soy el mensaje del modal. Debo incluir un mensaje</p>
  </div>
  </>
  )
}

    <div openModal={openModal}>
      <h3>Soy el título del modal</h3>
      <icon></icon>
      <i class="far fa-check-circle"></i>
      <p>Soy el mensaje del modal. Debo incluir un mensaje</p>
    </div>