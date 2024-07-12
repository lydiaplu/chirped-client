import React, { useState } from 'react'
import { FaExchangeAlt } from 'react-icons/fa';
import { Icon } from '../SocialPost.styles';
import { removeFollow } from '../../../api/followApi';
import { useSelector } from 'react-redux';

export default function FollowIcon({ tweetUserId }) {
    const currentUser = useSelector(state => state.user.currentUser);
    const [isFollow, setIsFollow] = useState(true);

    const unFollowHandle = async () => {
        try {

            const follow = {
                followerId: currentUser.userId,
                followingId: tweetUserId
            }

            const success = await removeFollow(follow);

            if (success) {
                // showMessage("added successfully!", "info");
                setIsFollow(false);
            } else {
                // showMessage("Error adding!", "danger");
            }
        } catch (error) {
            // showMessage(error.message, "danger");
        }
    }

    return (
        isFollow && <Icon onClick={unFollowHandle}>
            <FaExchangeAlt size="1.5rem" />
        </Icon>
    )
}
