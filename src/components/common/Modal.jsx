import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ModalBodyBlock, ModalCloseBtn, ModalWrapper } from './Modal.style';

export default function Modal(props) {
  const closeModal = props.closeModal;
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalBodyBlock
        onClick={e => e.stopPropagation()}
        width={props.width}
        height={props.height}
        padding={props.padding}
      >
        <ModalCloseBtn onClick={closeModal}>
          <AiOutlineClose />
        </ModalCloseBtn>
        {props.children}
      </ModalBodyBlock>
    </ModalWrapper>
  );
}
