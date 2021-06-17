import { FullScreen, Close } from './CardStyles';

interface ModalProps {
  photo: string;
  onClose: () => void;
}

const FullScreenModal = ({ photo, onClose }: ModalProps) => {
  let srcImgEl = document.getElementById(photo);

  if (srcImgEl) {
    const src = cv.imread(srcImgEl);
    const dst = new cv.Mat();

    cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);

    cv.Canny(src, dst, 50, 100, 3, false);

    cv.imshow('output', dst);

    src.delete();
    dst.delete();
  }

  // Did not have time to make the cv output work

  return (
    <FullScreen>
      <Close onClick={onClose} />
      <img id={photo} src={photo} alt="imageInput" />
      <canvas width="300" height="300" id="output"></canvas>
    </FullScreen>
  );
};

export default FullScreenModal;
