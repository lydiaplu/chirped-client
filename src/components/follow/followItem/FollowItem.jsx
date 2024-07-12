// FollowItem.js
import React, { useState } from 'react';
import { UserContainer, Avatar, UserInfo, DisplayName, Username, FollowButton, UserDetail, DetailsContainer } from './FollowItem.styles';
import { Link } from 'react-router-dom';
import { addFollow, removeFollow } from '../../../api/followApi';
import { useSelector } from 'react-redux';

const FollowItem = ({ user, followed }) => {
    const currentUser = useSelector(state => state.user.currentUser);
    const [isFollow, setIsFollow] = useState(followed);

    const followUser = async () => {
        try {
            const follow = {
                followerId: currentUser.userId,
                followingId: user.userId,
            }
            const success = await addFollow(follow);

            if (success) {
                // showMessage("added successfully!", "info");
                // clearForm();
                setIsFollow(true)
            } else {
                // showMessage("Error adding!", "danger");
            }
        } catch (error) {
            // showMessage(error.message, "danger");
        }
    }

    const unfollowUser = async () => {
        try {
            const follow = {
                followerId: currentUser.userId,
                followingId: user.userId,
            }
            const success = await removeFollow(follow);

            if (success==="") {
                // showMessage("added successfully!", "info");
                // clearForm();
                setIsFollow(false)
            } else {
                // showMessage("Error adding!", "danger");
            }
        } catch (error) {
            // showMessage(error.message, "danger");
        }
    }

    const followHandle = () => {
        if (isFollow) {
            unfollowUser();
        } else {
            followUser();
        }
    }

    return (
        <UserContainer>
            <Avatar
                src={user.userProfile.profilePicUrl ?
                    `http://localhost:9195/files/${user.userProfile.profilePicUrl}` :
                    `https://ui-avatars.com/api/?name=${user.username}&color=7F9CF5&background=EBF4FF`}
                alt={user.userProfile.displayName}
            />
            <DetailsContainer>
                <Link to={`/profile/${user.username}`} style={{ textDecoration: 'none' }}>

                    <DisplayName>{user.userProfile && user.userProfile.displayName}</DisplayName>
                    <Username>@{user.username}</Username>
                </Link>
            </DetailsContainer>

            <FollowButton onClick={followHandle}>
                {isFollow ? "Unfollow" : "Follow"}
            </FollowButton>
        </UserContainer>

    );
};

export default FollowItem;
