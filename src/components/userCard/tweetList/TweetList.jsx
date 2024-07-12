import React from 'react';
import { TweetContainer, Tweet, TweetDate, TweetContent } from './TweetList.styles';

const TweetList = () => {

    const tweets = [
        {
            date: "2019.12.1",
            content: "the weather is beautiful"
        },
        {
            date: "2019.06.10",
            content: "the weather is warm"
        }
    ];
    return (
        <TweetContainer>
            {tweets.map((tweet, index) => (
                <Tweet key={index}>
                    <TweetDate>{tweet.date}</TweetDate>
                    <TweetContent>{tweet.content}</TweetContent>
                </Tweet>
            ))}
        </TweetContainer>
    );
};

export default TweetList;
