// SocialPost.styles.js
import styled from 'styled-components';

export const PostContainer = styled.div`
  background: #fff;
  border-bottom: 1px solid rgb(239, 243, 244); // 添加下划线
  padding: 1rem;
  margin: 1rem 0;

  &:hover {
    background-color: #f8f8f8;  // 设置为浅灰色背景
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPhoto = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const DisplayName = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const UserName = styled.span`
  color: #666;
  margin-right: 1rem;
`;

export const PostDate = styled.span`
  color: #666;
`;

export const Content = styled.p`
  padding: 1rem 0;
`;

export const ImagesCarousel = styled.div`
  margin-top: 1rem;
  overflow: hidden; // 隐藏横向滚动条
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;
`;

export const ActionIcons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  margin-left: 0.5rem;
`;
