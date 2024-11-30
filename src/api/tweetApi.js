import { api, getHeader } from './apiConfig';

export async function addTweet(tweet) {
    const formData = new FormData();
    formData.append("userId", tweet.userId);
    formData.append("content", tweet.content);

    if (tweet.images)
        formData.append("images", tweet.images);

    const response = await api.post("/tweets/add/new-tweet", formData, {
        headers: { ...getHeader(), "Content-Type": "multipart/form-data" }
    })

    console.log("/tweets/add/new-tweet: ", response);

    if (response.status === 200) {
        return response.data;
    } else {
        return false;
    }
}

export async function editTweet(tweet) {
    const formData = new FormData();
    formData.append("content", tweet.content);
    if (tweet.images)
        formData.append("images", tweet.images);

    const response = await api.put(`/tweets/update/${tweet.tweetId}`, formData, {
        headers: { ...getHeader(), "Content-Type": "multipart/form-data" }
    })

    console.log(`/tweets/update/${tweet.tweetId}`, response);

    if (response.status === 200) {
        return true;
    } else {
        return false;
    }
}

export async function deleteTweet(tweetId) {
    try {
        const result = await api.delete(`/tweets/delete/${tweetId}`, {
            headers: getHeader()
        })

        return result.data;
    } catch (error) {
        throw new Error(`Error deleting ${error.message}`);
    }
}

export async function getTweetById(tweetId) {
    try {
        const result = await api.get(`/tweets/tweet/${tweetId}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function getLatestTweetsByUserAndFollowers(userId, lastSeenTimestamp, page, size) {
    try {

        const result = await api.get(`/tweets/newest?userId=${userId}&lastSeenTimestamp=${lastSeenTimestamp}&page=${page}&size=${size}`);
        console.log("getLatestTweetsByUserAndFollowers: ", `/tweets/newest?userId=${userId}&lastSeenTimestamp=${lastSeenTimestamp}&page=${page}&size=${size}`);
        console.log("getLatestTweetsByUserAndFollowers result: ", result)
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function findLatestTweetsByUser(userId, lastSeenTimestamp, page, size) {
    try {
        const result = await api.get(`/tweets/${userId}/newest?lastSeenTimestamp=${lastSeenTimestamp}&page=${page}&size=${size}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function findLatestTweetsByUsername(username, lastSeenTimestamp, page, size) {
    try {
        const result = await api.get(`/tweets/byusername/${username}/newest?lastSeenTimestamp=${lastSeenTimestamp}&page=${page}&size=${size}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}