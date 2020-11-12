import React from 'react'
import './ModalContent.css';

export const ModalContent = ({openModal, handleClose, children}) => {

  return (
      <div className="backdrop" onClick={handleClose}>
        <div className="modal-div">
          <button type="button" onClick={handleClose} className="modal-button-close">
            CERRAR
            {/* <i class="fas fa-times" /> */}
          </button>
          <div>
            {children}
          </div>
        </div>
      </div>
  
  )
}
