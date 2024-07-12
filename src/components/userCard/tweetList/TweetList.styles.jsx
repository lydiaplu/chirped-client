import styled from 'styled-components';

export const TweetContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 5px;
`;

export const Tweet = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
  &:last-child {
    border-bottom: none;
  }
`;

export const TweetDate = styled.div`
  font-size: 0.8em;
  color: #666;
`;

export const TweetContent = styled.p`
  margin: 5px 0;
`;
