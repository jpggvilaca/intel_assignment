import { useState } from 'react';

import { Photo } from '../../App';
import FullScreenModal from '../FullScreenModal/FullScreenModal';
import { Image } from '../FullScreenModal/FullScreenModalStyles';

import { Container, Card, Metadata } from './CardStyles';
interface CardsProps {
  collection: Photo[];
}

const Cards = ({ collection = [] }: CardsProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleSelectPhoto = (photoUrl: string) => {
    const src = cv.imread(document.getElementById(photoUrl));
    const dst = new cv.Mat();

    cv.cvtColor(src, src, cv.COLOR_BGRA2RGBA, 0);

    cv.Canny(src, dst, 50, 100, 3, false);

    cv.imshow('output', dst);

    src.delete();
    dst.delete();

    setSelectedPhoto(photoUrl);
  };

  return (
    <Container>
      {collection.map((item, index) => (
        <Card
          $backgroundImage={item.photoUrl}
          key={`card-${index}`}
          onClick={() => handleSelectPhoto(item.photoUrl)}
        >
          <Metadata>
            <Image
              crossOrigin="anonymous"
              src={item.photoUrl}
              id={item.photoUrl}
              alt="imageInput"
            />
            <span>{item.title}</span>
          </Metadata>
        </Card>
      ))}

      <FullScreenModal
        onClose={() => setSelectedPhoto(null)}
        isVisible={!!selectedPhoto}
      />
    </Container>
  );
};

export default Cards;
