import React from 'react';

import { Photo } from '../../App';

import { Container, Card, Metadata } from './CardStyles';
interface CardsProps {
  collection: Photo[];
}

const Cards = ({ collection = [] }: CardsProps) => {
  return (
    <Container>
      {collection.map((item, index) => (
        <Card $backgroundImage={item.photoUrl} key={`card-${index}`}>
          <Metadata>
            <span>{item.title}</span>
          </Metadata>
        </Card>
      ))}
    </Container>
  );
};

export default Cards;
