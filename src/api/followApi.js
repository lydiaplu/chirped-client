import { api, getHeader } from './apiConfig';

export async function addFollow(follow) {
    const formData = new FormData();
    formData.append("followerId", follow.followerId);
    formData.append("followingId", follow.followingId);

    const response = await api.post("/follows/add/new-following", formData, {
        headers: { ...getHeader(), "Content-Type": "multipart/form-data" }
    })

    console.log("/follows/add/new-following: ", response);

    if (response.status === 200) {
        return true;
    } else {
        return false;
    }
}

export async function removeFollow(follow) {
    try {
        const formData = new FormData();
        formData.append("followerId", follow.followerId);

        const result = await api.delete(`/follows/remove/${follow.followingId}?followerId=${follow.followerId}`, {
            headers: getHeader()
        })

        return result.data;
    } catch (error) {
        throw new Error(`Error deleting ${error.message}`);
    }
}

export async function getFollowers(userId, page, size) {
    try {
        const result = await api.get(`/follows/followers/${userId}?page=${page}&size=${size}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function getFollowings(userId, page, size) {
    try {
        const result = await api.get(`/follows/followings/${userId}?page=${page}&size=${size}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}