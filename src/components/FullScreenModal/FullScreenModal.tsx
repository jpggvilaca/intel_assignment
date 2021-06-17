import { useEffect, useRef } from 'react';
import { FullScreen, Close, Canvas, Image } from './FullScreenModalStyles';

interface ModalProps {
  photo: string;
  onClose: () => void;
}

const FullScreenModal = ({ photo, onClose }: ModalProps) => {
  const srcImgEl = useRef(null);

  useEffect(() => {
    if (srcImgEl.current) {
      const src = cv.imread(srcImgEl.current);
      const dst = new cv.Mat();

      cv.cvtColor(src, src, cv.COLOR_BGRA2RGBA, 0);

      cv.Canny(src, dst, 50, 100, 3, false);

      cv.imshow('output', dst);

      src.delete();
      dst.delete();
    }
  }, [srcImgEl]);

  return (
    <FullScreen>
      <Close onClick={onClose} />
      <Image
        crossOrigin="anonymous"
        ref={srcImgEl}
        src={photo}
        id={photo}
        alt="imageInput"
      />
      <Canvas width="300" height="300" id="output" />
    </FullScreen>
  );
};

export default FullScreenModal;
