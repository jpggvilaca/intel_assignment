import styled from 'styled-components';

const CARD_WIDTH = 200; // in px;

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(${CARD_WIDTH}px, 1fr));
`;

export const Card = styled.div<{ $backgroundImage: string }>`
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 180px;
  position: relative;
`;

export const Metadata = styled.div`
  opacity: 0;
  position: absolute;
  transition: all 1.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: opacity, background-color;
  background-color: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  padding: 8px;
  align-items: flex-end;

  &:hover {
    opacity: 0.7;
  }
`;
