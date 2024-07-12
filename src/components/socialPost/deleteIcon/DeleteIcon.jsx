import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTweetSlice } from '../../../store/tweetsSlice';

import { FiTrash2 } from 'react-icons/fi'
import { Icon } from '../SocialPost.styles';
import { deleteTweet } from '../../../api/tweetApi';

export default function DeleteIcon({ tweetId }) {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            const result = await deleteTweet(tweetId);
            if (result === "") {
                dispatch(deleteTweetSlice(tweetId));
                // showMessage(`Car Brand was deleted!`, adminConfig.colorEnum.success);
                // setCarBrands(carBrands.filter(item => item.id !== carBrandId));
            }
        } catch (error) {
            // showMessage(error.message, adminConfig.colorEmun.danger);
        }
    }

    return (
        <Icon onClick={handleDelete}>
            <FiTrash2 size="1.5rem" />
        </Icon>
    )
}
