import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const Input = styled.input`
  display: block;
  width: 80%;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: block;
  width: 84%;
  padding: 10px;
  margin: 10px auto;
  background-color: #0077b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;
