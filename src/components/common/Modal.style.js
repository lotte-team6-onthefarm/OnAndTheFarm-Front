import styled from 'styled-components';

const ModalWrapper = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBodyBlock = styled.div`
  position: absolute;
  width: ${props => (props.width ? props.width : '500px')};
  height: ${props => (props.height ? props.height : 'auto')};
  padding: ${props => (props.padding ? props.padding : '40px')};
  text-align: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;

export { ModalWrapper, ModalBodyBlock, ModalCloseBtn };
