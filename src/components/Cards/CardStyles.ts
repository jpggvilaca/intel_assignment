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
  padding: 4px;
`;

export const Metadata = styled.div`
  position: absolute;
  transition: all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: opacity, background-color;
  background-color: rgba(255, 255, 255, 0);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  padding: 8px;
  align-items: flex-end;

  span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;

    span {
      opacity: 1;
    }
  }
`;
