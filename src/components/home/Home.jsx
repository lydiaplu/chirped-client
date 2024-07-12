import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import UserInfo from '../userInfo/UserInfo'
import PostCreator from '../postCreator/PostCreator'
import SocialPostList from '../socialPostList/SocialPostList'
import RecommendList from '../follow/recommendList/RecommendList'
import TagNav from '../tagNav/TagNav'
import { FrameContainer, UserPart, PostPart } from './Home.styles'

export default function Home({ profile }) {
    const location = useLocation();
    const showTagNav = location.pathname.includes('/profile');

    return (
        <FrameContainer>
            <UserPart>
                <UserInfo />
                <RecommendList />
            </UserPart>

            <PostPart>
                <PostCreator />
                {showTagNav && <TagNav />}
                <div>
                    <Outlet />
                    {/* <SocialPostList postStyle={profile ? "profile" : "public"} /> */}
                </div>
            </PostPart>

        </FrameContainer>
    )
}
