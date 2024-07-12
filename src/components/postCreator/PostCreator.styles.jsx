import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 1rem;
  width: auto;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.textarea`
  width: 100%; 
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  resize: none;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  /* margin-bottom: 1rem; */
`;

export const IconContainer = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 1rem; // Adjust or remove if needed
  font-size: 2rem;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const PostButton = styled.button`
  background-color: #0077b5;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ImagesPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: left;
  margin-top: 1rem;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 10px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  /* center the icon */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`;
