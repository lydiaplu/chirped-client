import styled from 'styled-components';
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaUserPlus, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { media } from '../../styles/media';

export const UserContainer = styled.div`
  /* width: 30%;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px; */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: white;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  width: calc(100% - 10px);
  margin: 10px;
  flex: 1 0 auto;

  ${media.phone`
  width: calc(50% - 20px);
  `}

  ${media.tablet`
    width: calc(33.333% - 23.333px);
  `}

  ${media.desktop`
    width: calc(25% - 25px);
  `}
`;

export const UserPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 3px solid #ccc;
`;

export const UserInfo = styled.div`
  text-align: center;

  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1; // Allows this container to expand
`;

export const UserDetail = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
`;

export const UserPosition = styled.span`
  font-size: 1.4rem;
  color: #333;
  /* margin-bottom: 1rem; */
`;

export const UserName = styled(Link)`
  color: #555;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const UserBio = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const UserStats = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: auto; 
`;

export const FollowButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

export const IconContainer = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
  vertical-align: middle;
`;
