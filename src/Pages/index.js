import React, { useState, useEffect, useCallback } from 'react';
import Ballot from '../Components/Ballot/Ballot';
import Category from '../Components/Category';
import Header from '../Components/Header'
import { Container, Wrapper } from './styles';
import api from '../Api/Api';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({})

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

  return(
    <Container>
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
    </Container>
  )
};

export default MainPage;