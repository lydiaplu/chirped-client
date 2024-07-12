import styled from "styled-components";
import { Link } from 'react-router-dom';
import { media } from "../../styles/media";

export const UserInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  transition: padding 0.3s ease;
  padding: 2rem; /* 增加内边距 */
  background-color: #fff; /* 设置背景色 */
  border-radius: 15px; /* 圆角设计 */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  ${media.phone`
    flex-direction: row;
    padding: 1rem 10%;
  `}

  ${media.tablet`
    flex-direction: row;
    padding: 1.5rem 20%;
  `}
  
  ${media.desktop`
    flex-direction: column;
    padding: 2rem 1rem;
    border: 1px solid #ececec;
    box-shadow:none;
  `}
`;

export const EditButton = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  /* background: #0077b5; */
  /* color: white; */
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 2.5rem;

  ${media.desktop`
    top: 20rem;
    right: 10px;
    /* align-self: flex-end; */
  `}
`;

export const UserPhoto = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin-bottom: 2rem; /* 增加底部外边距 */
  object-fit: cover;
  margin: 1rem auto; /* 自动居中 */

  ${media.desktop`
    margin: 1rem auto 2rem;
  `}
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem; /* 增加左右内边距 */
`;

export const DisplayName = styled.span`
  font-weight: bold;
  font-size: 2rem;
  color: #333;
  margin-right: 0.5rem;
`;

export const UserName = styled(Link)`
  color: #555;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const UserBio = styled.p`
  color: #666;
  font-size: 1.4rem;
  margin-bottom: 1rem; /* 增加间距 */
`;

export const UserPosition = styled.span`
  font-size: 1.4rem;
  color: #333;
  /* margin-bottom: 1rem; */
`;

export const UserCityJoinDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const UserCityJoinDateSpan = styled.span`
  margin-right: 2rem; /* 增加右侧外边距 */
`;

export const UserSocialInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1.4rem;
  margin-top: 1rem;
`;

export const UserSocialInfoLink = styled(Link)`
  margin-right: 1rem;
`;

export const IconContainer = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
  vertical-align: middle;
`;
