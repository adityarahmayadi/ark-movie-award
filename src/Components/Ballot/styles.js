import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content: flex-start;
  width: 240px;
  border-radius: 4px;
  background: #FFFFFF;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

export const Overlay = styled.div`
  background: #0D2436;
  background: ${props => props.selected ? '#009B86' : '#0D2436'};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  top: 0;
  left: 0;
  :hover {
    transition: opacity 1s;
    opacity: ${props => props.selected ? '0.5' : '0'};
  }
`;

export const Label = styled.p`
  font-size: 16px;
  color: #000000;
`;

export const Image = styled.img`
  width: 240px;
  height: auto;
`;

export const Button = styled.div`
  width: 100%;
  height: 40px;
  background: ${props => props.selected ? '#E24F4F' : '#009B86'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-weight: 500;
`;

export const SelectedLabel = styled.div`
  height: 48px;
  width: 180px;
  padding: 8px;
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: #FFFFFF;
  transform: rotate(-20deg);
  position: absolute;
  top: 40%;
`