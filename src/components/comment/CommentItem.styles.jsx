import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const Username = styled.span`
  color: #555;
  margin-right: 10px;
`;

export const Timestamp = styled.span`
  color: #999;
`;

export const Text = styled.p`
  margin-bottom: 0.5rem;
`;

export const ReplyButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  color: #0077b5;
  cursor: pointer;
  padding: 5px 10px;
`;
