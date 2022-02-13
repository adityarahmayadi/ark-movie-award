import styled from 'styled-components';

export const Overlay = styled.div`
	z-index: 100;
	display: ${({show}) => (show ? 'flex' : 'none')};
	position: fixed;
  align-items: center;
  justify-content: center;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.5);
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  width: 600px;
  height: 320px;
  border-radius: 20px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  height: 48px;
  width: auto;
  padding: 8px;
  border: 2px solid #009B86;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: #009B86;
  transform: rotate(-20deg);
`