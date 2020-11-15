import React from 'react'
import './ModalContent.css';

export const ModalContent = ({ openModal, handleClose, children }) => {

  return (
    <div className="backdrop" onClick={handleClose}>
      <div className="modal-div">
        <i className="fas fa-times" />
        <div className="child">
          {children}
        </div>
      </div>
    </div>

  )
}

