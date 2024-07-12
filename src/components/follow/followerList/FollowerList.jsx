import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import FollowItem from '../followItem/FollowItem';
import { getFollowers } from '../../../api/followApi';

export default function FollowerList() {
    const currentUser = useSelector(state => state.user.currentUser);
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetch = async () => {
            try {
                let result = await getFollowers(currentUser.userId, 0, 100);

                console.log("get getFollowers: ", result.content);
                result && setUsers(result.content);

            } catch (error) {
                console.log("fetch error: ", error);
            }
        }

        currentUser && fetch();
    }, [currentUser])

    return (
        <div>
            {users && users.length > 0 ? users.map(user => (
                <FollowItem key={user.follower.username} user={user.follower}  />
            )) : (
                <div>Ops! You do not have any followers</div>
            )}
        </div>
    )
}
