import styled, { css } from 'styled-components';
import Modal from 'react-modal'
import { media } from './media';

export const StyledModal = styled(Modal)`
  position: fixed;
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  z-index: 1000;
  width: 100%;
  max-height: 80vh;
  border: 1px solid #ccc;
  overflow: hidden;
  /* overflow-y: auto; */
  background: white;

  ${media.tablet(css`
    position: fixed;
    top: 50%;
    left: 50%;
    bottom: auto;
    transform: translate(-50%, -50%);
    width: 80%;
    height: auto;
    min-height: 150px;
    max-height: 60vh;
    /* overflow-y: auto;  */
  `)}
`;
