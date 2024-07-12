import React from 'react';
import {
  UserContainer, UserPhoto, UserInfo, UserDetail, UserBio, UserStats, FollowButton, IconContainer,
  UserPosition, UserName
} from './UserCard.styles';
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaUserPlus, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const UserCard = React.forwardRef(({ user }, ref) => {
  return (
    <UserContainer ref={ref}>
      <UserPhoto 
      src={user.userProfile.profilePicUrl?
        `http://localhost:9195/files/${user.userProfile.profilePicUrl}`:
        `https://ui-avatars.com/api/?name=${user.username}&color=7F9CF5&background=EBF4FF`}
      alt={user.userProfile.displayName} /
      >
      <UserInfo>
        <h3>{user.userProfile.displayName}</h3>
        <h4>@{user.username}</h4>
        <UserDetail>
          <UserPosition>{user.title}</UserPosition>
        </UserDetail>

        <UserDetail>
          {user.manager &&
            (<UserName as={Link} to={`/manager/${user.manager.username}`}>
              Manager: @{user.manager.username}
            </UserName>)}
        </UserDetail>

        <UserDetail>
          <IconContainer><FaMapMarkerAlt /></IconContainer> {user.address.city}, {user.address.state}
        </UserDetail>

        <UserDetail>
          <IconContainer><FaCalendarAlt /></IconContainer> {`${user.startDate[1]}/${user.startDate[2]}/${user.startDate[0]}`}
        </UserDetail>

        <UserBio>{user.userProfile.bio}</UserBio>
      </UserInfo>
      <UserStats>
        <span><FaTwitter /> {user.tweets.length} </span>
        <span><FaUserFriends /> {user.follower.length} </span>
        <span><FaUserPlus /> {user.following.length} </span>
      </UserStats>
      {/* <FollowButton>Follow</FollowButton> */}
    </UserContainer>
  );
});

export default UserCard;
