import React, { useState } from 'react';

import { Photo } from '../../App';
import FullScreenModal from './FullScreenModal';

import { Container, Card, Metadata } from './CardStyles';
interface CardsProps {
  collection: Photo[];
}

const Cards = ({ collection = [] }: CardsProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <Container>
      {collection.map((item, index) => (
        <Card
          $backgroundImage={item.photoUrl}
          key={`card-${index}`}
          onClick={() => setSelectedPhoto(item.photoUrl)}
        >
          <Metadata>
            <span>{item.title}</span>
          </Metadata>
        </Card>
      ))}

      {selectedPhoto ? <FullScreenModal photo={selectedPhoto} /> : null}
    </Container>
  );
};

export default Cards;
