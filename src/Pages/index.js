import React from 'react';
import Category from '../Components/Category';
import Header from '../Components/Header'
import { Container } from './styles';

const MainPage = () => {
  return(
    <Container>
      <Header title='Movie Awards 2021' />
      <Category label='Best Actor' />
    </Container>
  )
};

export default MainPage;