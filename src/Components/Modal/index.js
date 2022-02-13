import React from 'react';
import { ModalContainer, ModalContent, Overlay } from './styles';

const Modal = ({
  isOpen,
  onClose
}) => {
  return(
    <Overlay onClick={onClose} show={isOpen}>
      <ModalContainer>
        <ModalContent>Thank you for your participation</ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal