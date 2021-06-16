import React from 'react';

import { FullScreen } from './CardStyles';

interface ModalProps {
  photo: string;
}

const FullScreenModal = ({ photo }: ModalProps) => {
  return <FullScreen>{photo}</FullScreen>;
};

export default FullScreenModal;
