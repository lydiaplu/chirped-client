import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaCalendar, FaTwitter, FaUserFriends, FaUserPlus } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";

import { getUserById } from '../../api/userApi';

import {
    UserInfoContainer, UserPhoto, UserData, DisplayName, UserName, UserBio, UserPosition,
    UserCityJoinDate, UserCityJoinDateSpan, UserSocialInfo, UserSocialInfoLink, IconContainer, EditButton
} from "./UserInfo.styles";
import { useSelector } from 'react-redux';

export default function UserInfo() {
    const currentUser = useSelector(state => state.user.currentUser);

    const [user, setUser] = useState();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userResult = await getUserById(currentUser.userId);
                console.log("get userProfile: ", userResult);

                userResult && setUser(userResult);

            } catch (error) {
                console.log("fetch user profile error: ", error);
            }
        }

        currentUser && fetchProfile();
    }, [currentUser])


    return (

        user && <UserInfoContainer>
            <EditButton as={Link} to={`/profile/edit/${user.userId}`}><IoMdSettings /></EditButton>
            <UserPhoto src={"http://localhost:9195/files/" + user.userProfile.profilePicUrl} alt="User Photo" />
            <UserData>
                <div>
                    <DisplayName>{user.userProfile.displayName}</DisplayName>
                    <UserName as={Link} to={`/profile/${user.username}`}>@{user.username}</UserName>
                </div>
                <UserPosition>{user.title}</UserPosition>
                <UserName as={Link} to={`/profile/${user.manager.username}`}>
                    Manager: @{user.manager.username}
                </UserName>
                <UserCityJoinDate>
                    <UserCityJoinDateSpan>
                        <IconContainer><FaLocationArrow /></IconContainer>
                        {user.address.city}, {user.address.state}
                    </UserCityJoinDateSpan>
                    <UserCityJoinDateSpan>
                        <IconContainer><FaCalendar /></IconContainer>
                        {`${user.startDate[1]}/${user.startDate[2]}/${user.startDate[0]}`}
                    </UserCityJoinDateSpan>
                </UserCityJoinDate>
                <UserBio>{user.userProfile.bio}</UserBio>

                <UserSocialInfo>
                    <UserSocialInfoLink to={`/profile`}><IconContainer><FaTwitter /></IconContainer>{user.tweets.length} Tweets</UserSocialInfoLink>
                    <UserSocialInfoLink to={`/profile/followers`}><IconContainer><FaUserFriends /></IconContainer>{user.follower.length} Followers</UserSocialInfoLink>
                    <UserSocialInfoLink to={`/profile/following`}><IconContainer><FaUserPlus /></IconContainer>{user.following.length} Following</UserSocialInfoLink>
                </UserSocialInfo>
            </UserData>
        </UserInfoContainer>
    )
}
