import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  column-gap: 32px;
  row-gap: 32px;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ButtonWrapper = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubmitButton = styled.div`
  height: 60px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #009B86;
  color: #FFFFFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    color: #CCCCCC;
    background: #34AC9C;
  }
`