import styled from 'styled-components';

export const EditContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px auto;
  width: 50%;
  min-width: 300px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin: 10px 0;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #0077b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;
