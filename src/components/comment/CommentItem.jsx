import React from 'react';
import { format } from 'date-fns';
import {
    CommentContainer,
    UserInfo,
    Avatar,
    Name,
    Username,
    Timestamp,
    Text,
    ReplyButton
} from './CommentItem.styles';

const CommentItem = ({ comment }) => {
    return (
        <CommentContainer>
            <UserInfo>
                <Avatar src={"http://localhost:9195/files/" + comment.user.userProfile.profilePicUrl} alt="Avatar" />
                <Name>{comment.user.userProfile.displayName}</Name>
                <Username>@{comment.user.username}</Username>
                <Timestamp>{format(comment.updatedAt ? comment.updatedAt : comment.createdAt, "MM/dd/yyyy hh:mm aaa")}</Timestamp>
            </UserInfo>
            <Text>{comment.content}</Text>
            {/* <ReplyButton>Reply</ReplyButton> */}
            
        </CommentContainer>
    );
};

export default CommentItem;
