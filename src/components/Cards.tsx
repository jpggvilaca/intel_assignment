import React from 'react';

import { Container, Card, Metadata } from './CardStyles';

const Cards = () => {
  const fakeData = [
    {
      name: 'Test name',
      description: 'some description',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Test name 2',
      description: 'some description',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Test name 3',
      description: 'some description',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Test name 4',
      description: 'some description',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Test name 5',
      description: 'some description',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Container>
      {fakeData.map((item) => (
        <Card $backgroundImage={item.image}>
          <Metadata>
            <span>{item.name}</span>
            <span>{item.description}</span>
          </Metadata>
        </Card>
      ))}
    </Container>
  );
};

export default Cards;
