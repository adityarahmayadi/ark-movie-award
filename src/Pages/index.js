import React from 'react';
import Ballot from '../Components/Ballot/Ballot';
import Category from '../Components/Category';
import Header from '../Components/Header'
import { Container, Wrapper } from './styles';

const MainPage = () => {
  return(
    <Container>
      <Header title='Movie Awards 2021' />
      <Category label='Best Actor' />
      <Wrapper>
        <Ballot
          selected
          title="Normadland"
          photoUrl="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
        />
        <Ballot
          title="Normadland"
          photoUrl="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
        />
        <Ballot
          title="Normadland"
          photoUrl="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
        />
        <Ballot
          title="Normadland"
          photoUrl="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
        />
        <Ballot
          title="Normadland"
          photoUrl="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
        />
        <Ballot
          title="Normadland"
          photoUrl="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
        />
        <Ballot
          title="Normadland"
          photoUrl="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
        />
        <Ballot
          title="Normadland"
          photoUrl="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
        />
        <Ballot
          title="Normadland"
          photoUrl="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
        />
        <Ballot
          title="Normadland"
          photoUrl="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
        />
      </Wrapper>
    </Container>
  )
};

export default MainPage;