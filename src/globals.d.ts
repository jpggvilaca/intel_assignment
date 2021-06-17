declare let cv: CV;

interface CV {
  imread: (photo) => { delete: () => void; };
  Mat: Constructor;
  cvtColor: (src, src, color, number) => void;
  Canny: (src, dest, arg1, arg2, arg3, arg4) => void;
  imshow: (canvasOutput, dest) => void;
  delete: () => void;
  COLOR_RGB2GRAY: string;
}