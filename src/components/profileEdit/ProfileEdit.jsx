import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { EditContainer, Input, TextArea, ImagePreview, Button } from './ProfileEdit.styles';
import { resizeImage } from "../../utils/resizeImage"

import { addProfile, editProfile, getUserProfileById } from '../../api/userProfileApi';

export default function ProfileEdit() {
    const { userId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // const fileUrl = process.env.REACT_APP_SERVER_FILE_URL;

    const profileObj = {
        email: "",
        // userName: "",
        displayName: "",
        password: "",
        conformPassword: "",
        bio: "",
        profilePic: ""
    }
    const [profile, setProfile] = useState(profileObj);
    const [picturePreview, setPicturePreview] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userProfile = await getUserProfileById(userId);
                console.log("get userProfile: ", userProfile);

                userProfile && setProfile({
                    email: userProfile.user.email,
                    displayName: userProfile.displayName,
                    password: userProfile.password,
                    conformPassword: userProfile.password,
                    bio: userProfile.bio,
                    profilePic: "http://localhost:9195/files/" + userProfile.profilePicUrl
                });


            } catch (error) {
                console.log("fetch user profile error: ", error);
            }
        }

        userId && fetchProfile();
    }, [userId])

    useEffect(() => {
        if (profile.profilePic instanceof File)
            return;
        console.log("logo: ", profile.profilePic);
        profile.profilePic && setPicturePreview(profile.profilePic);
    }, [profile.profilePic])

    const handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;

        setProfile({ ...profile, [name]: value })
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setProfile({ ...profile, profilePic: file });
        setPicturePreview(URL.createObjectURL(file));
    };

    const addProfileFunc = async () => {
        try {
            // Compress images before uploading
            // try {
            //     const compressedImage = await resizeImage(profile.profilePic, 800, 600, 0.7);
            //     profile.profilePic = compressedImage;
            // } catch (error) {
            //     console.error('Error compressing the image', error);
            // }

            const success = await addProfile(profile);

            if (success) {
                // showMessage("added successfully!", "info");
            } else {
                // showMessage("Error adding!", "danger");
            }
        } catch (error) {
            // showMessage(error.message, "danger");
        }
    }

    const editPrifileFunc = async () => {
        try {
            // Compress images before uploading
            // try {
            //     const compressedImage = await resizeImage(profile.profilePic, 800, 600, 0.7);
            //     profile.profilePic.logo = compressedImage;
            // } catch (error) {
            //     console.error('Error compressing the image', error);
            // }

            const success = await editProfile(userId, profile);

            if (success) {
                // showMessage("added successfully!", "info");
            } else {
                // showMessage("Error adding!", "danger");
            }
        } catch (error) {
            // showMessage(error.message, "danger");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userId === undefined) {
            addProfileFunc();
        } else {
            editPrifileFunc();
        }

        navigate(from.pathname, { replace: true });
    };

    const LogoutHandle = () => {
        localStorage.removeItem("currentUser");
        navigate("/login");
    }

    return (
        <EditContainer>
            <h1>Edit your profile</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                />
                <Input
                    type="text"
                    id="displayName"
                    name="displayName"
                    value={profile.displayName}
                    onChange={handleInputChange}
                    placeholder="Display Name"
                    required
                />
                <Input
                    type="password"
                    id="password"
                    name="password"
                    value={profile.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                />
                <Input
                    type="password"
                    id="conformPassword"
                    name="conformPassword"
                    value={profile.conformPassword}
                    onChange={handleInputChange}
                    placeholder="Conform Password"
                    required
                />
                <TextArea
                    id="bio"
                    name="bio"
                    value={profile.bio}
                    onChange={handleInputChange}
                    placeholder="Bio"
                />
                <Input
                    type="file"
                    onChange={handleImageChange}
                />
                {picturePreview && <ImagePreview src={picturePreview} alt="Profile Preview" />}

                <Button type="submit">Save Changes</Button>
                <Button onClick={LogoutHandle}>Logout</Button>

            </form>
        </EditContainer>
    );
}
