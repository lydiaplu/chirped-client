import React, { useCallback, useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';
import { initialTweetsSlice, addTweetsSlice } from '../../store/tweetsSlice';

import SocialPost from '../socialPost/SocialPost';
import { getLatestTweetsByUserAndFollowers, findLatestTweetsByUser, findLatestTweetsByUsername } from '../../api/tweetApi';
import { useParams } from 'react-router-dom';

export default function SocialPostList({ postStyle }) {
    const { username } = useParams();

    const dispatch = useDispatch();
    const tweets = useSelector(state => state.tweets);
    const currentUser = useSelector(state => state.user.currentUser);
    const lastSeenTimestamp = useRef(new Date()).current;

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [initialMode, setInitialMode] = useState(true);

    const observer = useRef()

    const lastElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
                setInitialMode(false);
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    useEffect(() => {
        if (currentPage === undefined) return;
        setLoading(true);
        fetch();
    }, [currentPage])

    const fetch = async () => {
        try {
            let tweetsResult = null;
            if (postStyle === "public") {
                tweetsResult = await getLatestTweetsByUserAndFollowers(currentUser.userId, lastSeenTimestamp, currentPage, itemsPerPage);
            } else if(!username) {
                tweetsResult = await findLatestTweetsByUser(currentUser.userId, lastSeenTimestamp, currentPage, itemsPerPage);
            } else if(username) {
                tweetsResult = await findLatestTweetsByUsername(username, lastSeenTimestamp, currentPage, itemsPerPage);
            }

            console.log("get tweets: ", tweetsResult);

            if (tweetsResult) {
                // dispatch(addTweetsSlice(tweetsResult.content));
                // setHasMore(!tweetsResult.last);

                if (initialMode) {
                    dispatch(initialTweetsSlice(tweetsResult.content));
                } else {
                    dispatch(addTweetsSlice(tweetsResult.content));
                }
                setHasMore(!tweetsResult.last);
            }
        } catch (error) {
            console.log("fetch error: ", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* {tweets && tweets.map(tweet => (
                <SocialPost key={tweet.tweetId} tweet={tweet} />
            ))} */}

            {tweets && tweets.map((tweet, index) => {
                if (tweets.length === index + 1) {
                    return <SocialPost ref={lastElementRef} key={tweet.tweetId} tweet={tweet} />
                } else {
                    return <SocialPost key={tweet.tweetId} tweet={tweet} />
                }
            })}
            <div>{loading && 'Loading...'}</div>
        </>
    )
}
