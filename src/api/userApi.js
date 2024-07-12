import { api, getHeader } from './apiConfig';

export async function getUserById(userId) {
    try {
        const result = await api.get(`/users/user/${userId}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function findUsersForRecommendation(userId, page, size) {
    try {
        const result = await api.get(`/users/recommendation/${userId}?page=${page}&size=${size}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function getUserByRandom() {
    try {
        const result = await api.get(`/users/random`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function findAllUsers(page, size) {
    try {
        const result = await api.get(`/users/all?page=${page}&size=${size}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function findUsersBySearchTerm(search, page, size ) {
    try {
        const result = await api.get(`/users/search?search=${search}&page=${page}&size=${size}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function userLogin(userInfo) {
    const formData = new FormData();
    formData.append("usernameOrEmail", userInfo.usernameOrEmail);
    formData.append("password", userInfo.password);

    const response = await api.post("/users/login", formData, {
        headers: { ...getHeader(), "Content-Type": "multipart/form-data" }
    })

    console.log("/users/login: ", response);

    if (response.status === 200) {
        return response.data;
    } else {
        return false;
    }
}