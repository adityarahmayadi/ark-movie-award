import React, { useState, useEffect, useCallback } from 'react';
import Ballot from '../Components/Ballot/Ballot';
import Category from '../Components/Category';
import Header from '../Components/Header'
import { ButtonWrapper, Container, SubmitButton, Wrapper } from './styles';
import api from '../Api/Api';
import Modal from '../Components/Modal';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const [isModalOpen, setIsModalOpen] =  useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getBallotData(); 
      setData(result.items)
    }
    fetchData();
  }, [])

  const handleClick = useCallback((values) => () => {
    setSelectedData((prev) => ({
      ...prev,
      ...values,
    }))
  }, [])

  const handleCancel = useCallback((values) => () => {
    const key = Object.keys(values)[0];
      setSelectedData((prev) => ({
        ...prev,
        [key]: null,
      }))
  }, [])

  const handleSubmit = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return(
    <Container>
      <Modal onClose={closeModal} isOpen={isModalOpen} />
      <Header title='Movie Awards 2021' />
      {
        data.map((category) => (
          <>
            <Category label={category.title} />
            <Wrapper>
              {
                category.items.map((item) => {
                  const selected = selectedData?.[category.id] === item.id;
                  return (
                    <Ballot
                      selected={selected}
                      title={item.title}
                      photoUrl={item.photoUrL}
                      onClick={selected ? handleCancel({[category.id]: item.id}): handleClick({[category.id]: item.id})}
                    />
                  )
                })
              }
            </Wrapper>
          </>
        ))
      }
      <ButtonWrapper>
        <SubmitButton onClick={handleSubmit}>SUBMIT</SubmitButton>
      </ButtonWrapper>
    </Container>
  )
};

export default MainPage;