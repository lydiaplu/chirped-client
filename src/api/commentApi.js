import { api, getHeader } from './apiConfig';

export async function addComment(comment) {
    const formData = new FormData();
    formData.append("tweetId", comment.tweetId);
    formData.append("userId", comment.userId);
    formData.append("content", comment.content);
    
    if(comment.parentCommentId)
        formData.append("parentCommentId", comment.parentCommentId);

    const response = await api.post("/comments/add/new-comment", formData, {
        headers: { ...getHeader(), "Content-Type": "multipart/form-data" }
    })

    console.log("/comments/add/new-comment: ", response);

    if (response.status === 200) {
        return response.data;
    } else {
        return false;
    }
}

export async function deleteComment(commentId) {
    try {
        const result = await api.delete(`/comments/delete/${commentId}`, {
            headers: getHeader()
        })

        return result.data;
    } catch (error) {
        throw new Error(`Error deleting ${error.message}`);
    }
}

export async function getCommentById(commentId) {
    try {
        const result = await api.get(`/comments/comment/${commentId}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function getCommentByTweetId(tweetId) {
    try {
        const result = await api.get(`/comments/${tweetId}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}