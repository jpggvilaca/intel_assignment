import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const Input = styled.input`
padding: 6px 8px;
margin-right: 4px;
`;

export const Button = styled.button`
  padding: 6px 8px;
  background: none;
  border: 1px solid #333;
  color: #333;
  transition: all .3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`;
