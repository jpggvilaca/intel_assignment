import { FullScreen, Close, Canvas } from './FullScreenModalStyles';

interface ModalProps {
  onClose: () => void;
  isVisible: boolean;
}

const FullScreenModal = ({ onClose, isVisible }: ModalProps) => {
  return (
    <FullScreen $isVisible={isVisible}>
      <Close onClick={onClose} />
      <Canvas id="output" />
    </FullScreen>
  );
};

export default FullScreenModal;
