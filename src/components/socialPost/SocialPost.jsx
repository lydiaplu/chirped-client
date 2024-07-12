// SocialPost.js
import React, { useState } from 'react';
import { format } from 'date-fns';
import { FiMoreHorizontal, FiMessageCircle, FiEdit2, FiTrash2 } from 'react-icons/fi';
import GliderComponent from 'react-glider-carousel';
import CommentIcon from './commentIcon/CommentIcon';
import EditIcon from './editIcon/EditIcon';
import DeleteIcon from './deleteIcon/DeleteIcon';
import 'glider-js/glider.min.css';
import {
  PostContainer, Header, UserInfo, UserPhoto, DisplayName, UserName, PostDate, Content,
  ImagesCarousel, Actions, Icon, ActionIcons, Text
} from './SocialPost.styles';
import FollowIcon from './followIcon/FollowIcon';
import { useSelector } from 'react-redux';

// export default function SocialPost({ tweet }) {
const SocialPost = React.forwardRef(({ tweet }, ref) => {

  const currentUser = useSelector(state => state.user.currentUser);
  const [images, setImages] = useState(['path_to_image1.jpg', 'path_to_image2.jpg', 'path_to_image3.jpg']);

  return (
    <PostContainer ref={ref}>
      <Header>
        <UserInfo>
          <UserPhoto
            src={
              tweet.user.userProfile.profilePicUrl?
              `http://localhost:9195/files/${tweet.user.userProfile.profilePicUrl}`:
              `https://ui-avatars.com/api/?name=${tweet.user.username}&color=7F9CF5&background=EBF4FF`
            }
            alt="User"
          />
          <DisplayName>{tweet.user.userProfile.displayName}</DisplayName>
          <UserName>@{tweet.user.username}</UserName>
          <PostDate>{format(tweet.updatedAt ? tweet.updatedAt : tweet.createdAt, "MM/dd/yyyy hh:mm aaa")}</PostDate>
        </UserInfo>
        {/* <FiMoreHorizontal size="1.5rem" /> */}
        {currentUser.userId !== tweet.user.userId && (<FollowIcon tweetUserId={tweet.user.userId} />)}

      </Header>
      <Content>
        {tweet.content}
      </Content>

      {tweet.images && (
        <ImagesCarousel>
          <GliderComponent draggable hasDots hasArrows>
            {tweet.images.map((img, index) => (
              <img key={index} src={img} alt={`Carousel ${index}`} style={{ width: '100%', height: 'auto' }} />
            ))}
          </GliderComponent>
        </ImagesCarousel>
      )}

      <Actions>
        <CommentIcon nums={tweet.comments.length} tweet={tweet} />
        {currentUser.userId === tweet.user.userId && (
          <ActionIcons>
            <EditIcon tweet={tweet} />
            <DeleteIcon tweetId={tweet.tweetId} />
          </ActionIcons>
        )}
      </Actions>
    </PostContainer>
  );
});

export default SocialPost;