import { Canvas, FullScreen } from './CardStyles';

interface ModalProps {
  photo: string;
}

const FullScreenModal = ({ photo }: ModalProps) => {
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
      <Canvas id={photo} $backgroundImage={photo} />
      <canvas width="300" height="300" id="output"></canvas>
    </FullScreen>
  );
};

export default FullScreenModal;
