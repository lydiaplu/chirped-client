import styled from 'styled-components';
import { media } from '../../styles/media';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px 15px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #0077b5;
    box-shadow: 0 0 5px rgba(0, 119, 181, 0.5);
  }
  
  /* ${media.phone`
    width: 50%;
  `}

  ${media.desktop`
    width: 100rem;
  `} */
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #333;
  }
`;

export const UsersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const UserCard = styled.div`
  
`;
