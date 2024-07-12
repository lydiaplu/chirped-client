import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import FollowItem from '../followItem/FollowItem';
import { getFollowings } from '../../../api/followApi';

export default function FollowingList() {
    const currentUser = useSelector(state => state.user.currentUser);
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetch = async () => {
            try {
                let result = await getFollowings(currentUser.userId, 0, 100);

                console.log("get getFollowings: ", result.content);
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
                <FollowItem key={user.following.username} user={user.following} followed={true} />
            )) : (
                <div>Ops! You do not have any following</div>
            )}
        </div>
    )
}
