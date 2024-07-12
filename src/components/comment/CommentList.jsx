import React, { useEffect, useRef, useState } from 'react';
import CommentItem from './CommentItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTweetsCommentSlice } from '../../store/tweetsSlice';

import {
    CommentsContainer,
    CommentsList,
    InputRow,
    Input,
    SendButton
} from './CommentList.styles';

import { addComment, deleteComment, getCommentByTweetId } from '../../api/commentApi';

const CommentList = ({ tweet }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);

    const [comments, setComments] = useState();
    const [newComment, setNewComment] = useState('');
    const [shouldScroll, setShouldScroll] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                let result = await getCommentByTweetId(tweet.tweetId);

                console.log("get comments: ", result);
                result && setComments(result);

            } catch (error) {
                console.log("fetch error: ", error);
            }
        }

        tweet && fetch();
    }, [tweet])

    useEffect(() => {
        if (shouldScroll) {
            const scrollElement = scrollRef.current;
            scrollElement.scrollTop = scrollElement.scrollHeight;
            setShouldScroll(false);
        }
    }, [shouldScroll])

    const handleSend = async () => {
        try {
            const comment = {
                tweetId: tweet.tweetId,
                userId: currentUser.userId,
                content: newComment,
                parentCommentId: null
            }

            const result = await addComment(comment);

            if (result) {
                // showMessage("added successfully!", "info");
                setNewComment("");
                setComments([...comments, result]);
                setShouldScroll(true);

                dispatch(addTweetsCommentSlice({tweetId: tweet.tweetId, comment:result}));
            } else {
                // showMessage("Error adding!", "danger");
            }
        } catch (error) {
            // showMessage(error.message, "danger");
        }
    };

    return (
        <CommentsContainer>
            <CommentsList ref={scrollRef}>
                {comments && comments.map((comment, index) => (
                    <CommentItem key={index} comment={comment} />
                ))}
            </CommentsList>
            <InputRow>
                <Input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Type your reply..."
                />
                <SendButton onClick={handleSend}>Send</SendButton>
            </InputRow>
        </CommentsContainer>
    );
};

export default CommentList;
