// App.js 或其他父组件
import React, { useEffect, useState } from 'react';
import FollowItem from '../followItem/FollowItem';
import { findUsersForRecommendation } from "../../../api/userApi";
import { RecommendListContainer, RecommendTitle } from './RecommendList.styles';
import { useSelector } from 'react-redux';

function RecommendList() {
    const currentUser = useSelector(state => state.user.currentUser);
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetch = async () => {
            try {
                let result = await findUsersForRecommendation(currentUser.userId, 0, 5);

                console.log("get RecommendList: ", result.content);
                result && setUsers(result.content);

            } catch (error) {
                console.log("fetch error: ", error);
            }
        }

        currentUser && fetch();
    }, [currentUser])


    return (
        <RecommendListContainer>
            <RecommendTitle>You May Like</RecommendTitle>
            <div>
                {users && users.map(user => (
                    <FollowItem key={user.username} user={user} />
                ))}
            </div>
        </RecommendListContainer>
    );
}

export default RecommendList;
