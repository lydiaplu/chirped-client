import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

export const CommentsContainer = styled.div`
  padding: 20px;
`;

export const CommentsList = styled.div`
  max-height: 60vh;
  overflow: hidden;
  overflow-y: auto;
  margin-bottom: 2rem;

  ${media.tablet(css`
    max-height: 40vh;
  `)}
`;

export const InputRow = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #0077b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;
