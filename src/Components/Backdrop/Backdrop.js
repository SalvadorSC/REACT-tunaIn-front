import React, { Children } from 'react';
import Modal from '../Modal/Modal';

export const Backdrop = ({children, openModal, clodeModal}) => {
  return (
    <>
      <Modal open={openModal} close={clodeModal}>
        {children}
      </Modal>
    </>
  )
}
