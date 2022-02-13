import React from 'react';
import { Wrapper, Image, Label, Button, Overlay, SelectedLabel } from './styles';

const Ballot = ({
  title,
  photoUrl,
  id,
  selected
}) => {
  return (
    <Wrapper>
      <Image src={photoUrl} alt='ballot image' />
      <Label>{title}</Label>
      <Button selected={selected}>{selected ? 'CANCEL' : 'SELECT'}</Button>
      <Overlay selected={selected}>
      </Overlay>
      {
        selected && (
          <SelectedLabel>SELECTED</SelectedLabel>
        )
      }
    </Wrapper>
  )
}

export default Ballot;