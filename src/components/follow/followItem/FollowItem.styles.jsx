// FollowItem.styles.js
import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  /* border: 1px solid #ccc; */
  /* border-radius: 5px; */
  /* margin-bottom: 10px; */

  &:hover {
    background-color: #f8f8f8;  // 设置为浅灰色背景
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const DetailsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DisplayName = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  color: #000;
`;

export const Username = styled.div`
  color: #555;
  font-size: 1.4rem;
`;

export const UserDetail = styled.div`
  color: #666;
  font-size: 12px;
`;

export const FollowButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;
