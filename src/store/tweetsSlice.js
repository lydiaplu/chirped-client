import { createSlice } from '@reduxjs/toolkit';

export const tweetsSlice = createSlice({
    name: "tweets",
    initialState: [],
    reducers: {
        initialTweetsSlice:(state, action) =>{
            return action.payload;
        },
        addTweetsSlice: (state, action) => {
            // const result = [...action.payload, ...state]
            const result = [...new Set([...state, ...action.payload])]
            return result;
        },
        deleteTweetSlice: (state, action) => {
            return state.filter(tweet => tweet.tweetId !== action.payload);
        },
        updateTweetSlice: (state, action) => {
            const result = state.map(tweet => tweet.tweetId === action.payload.tweetId ? { ...tweet, ...action.payload } : tweet);
            return result;
        },
        addTweetsCommentSlice: (state, action) => {
            const result = state.map(tweet => {
                if (tweet.tweetId === action.payload.tweetId) {
                    return {
                        ...tweet,
                        comments: [...tweet.comments, action.payload.comment]
                    };
                }
                return tweet;
            });
            return result;
        },
    }
})

export const { initialTweetsSlice, addTweetsSlice, deleteTweetSlice, updateTweetSlice,addTweetsCommentSlice } = tweetsSlice.actions;
export default tweetsSlice.reducer;