import { FullScreen, Close } from './CardStyles';

interface ModalProps {
  photo: string;
  onClose: () => void;
}

const FullScreenModal = ({ photo, onClose }: ModalProps) => {
  const srcImgEl = document.getElementById(photo);

  if (srcImgEl) {
    const src = cv.imread(srcImgEl);
    const dst = new cv.Mat();

    cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);

    cv.Canny(src, dst, 50, 100, 3, false);

    cv.imshow('output', dst);

    src.delete();
    dst.delete();
  }

  return (
    <FullScreen>
      <Close onClick={onClose} />
      <img src={photo} alt="imageInput" />
      <canvas width="300" height="300" id="output"></canvas>
    </FullScreen>
  );
};

export default FullScreenModal;
