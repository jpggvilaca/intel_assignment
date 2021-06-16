import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  height: 44px;
`;

export const Input = styled.input`
  padding: 6px 8px;
  margin-right: 4px;
  border: 1px solid #333;
  transition: all .3s ease-in-out;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 6px 8px;
  background: none;
  border: 1px solid #fff;
  color: #fff;
  transition: all .3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: black;
  }
`;
