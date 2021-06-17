import styled from 'styled-components';

export const FullScreen = styled.div<{ $isVisible: boolean }>`
  visibility: ${(props) => props.$isVisible ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  border: 1px solid #fff;
  padding: 20px;
`;

export const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 44px;
  width: 44px;
  font-size: 44px;

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: 'x';
  }
`;

export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  visibility: hidden;
`;
