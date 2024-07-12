import { api, getHeader } from './apiConfig';

export async function addProfile(profile) {
    const formData = new FormData();
    formData.append("email", profile.email);
    formData.append("displayName", profile.displayName);
    formData.append("password", profile.password);
    if(profile.bio)
        formData.append("bio", profile.bio);
    if(profile.profilePic)
        formData.append("profilePic", profile.profilePic);

    const response = await api.post("/user-profiles/add/new-user-profile", formData, {
        headers: { ...getHeader(), "Content-Type": "multipart/form-data" }
    })

    console.log("/user-profiles/add/new-user-profiles: ", response);

    if (response.status === 200) {
        return true;
    } else {
        return false;
    }
}

export async function editProfile(userId, profile) {
    const formData = new FormData();
    // formData.append("email", profile.email);
    formData.append("displayName", profile.displayName);
    formData.append("password", profile.password);
    if(profile.bio)
        formData.append("bio", profile.bio);
    if(profile.profilePic && profile.profilePic instanceof File)
        formData.append("profilePic", profile.profilePic);

    const response = await api.put(`/user-profiles/update/${userId}`, formData, {
        headers: { ...getHeader(), "Content-Type": "multipart/form-data" }
    }) 

    console.log("/user-profiles/update/${profile.userId}: ", response);

    if (response.status === 200) {
        return true;
    } else {
        return false;
    }
}

export async function getUserProfileById(userId) {
    try {
        const result = await api.get(`/user-profiles/user-profile/${userId}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

