import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterUser() {

    const navigate = useNavigate();

    const userInfoObj = {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        displayName: ""
    }
    const [userInfo, setUserInfo] = useState(userInfoObj);

    const [errorInfo, setErrorInfo] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateInput()) {
            console.log(userInfo);
        }
    }

    const cancelHandle = () => {
        navigate("/login");
    }

    const validateInput = () => {
        if(userInfo.firstname.length === 0) {
            
            setErrorInfo({...errorInfo, firstname: "firstname cannot be empty"})
            // console.log();
            return false;
        }
        return true;
    }

    const changeInputHandle = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if(name==="firstname" && value.length>0){
            setErrorInfo({errorInfo, firstname: ""})
        }

        setUserInfo({ ...userInfo, [name]: value });
    }

    return (
        <div>
            <form onSubmit={onSubmit} noValidate>
                <label htmlFor=''>First Name</label>
                <input
                    type='text'
                    name='firstname'
                    value={userInfo.firstname}
                    onChange={changeInputHandle}
                    required
                />
                <span>{errorInfo.firstname}</span>

                <label htmlFor=''>Last Name</label>
                <input
                    type='text'
                    name='lastname'
                    value={userInfo.lastname}
                    onChange={changeInputHandle}
                    required
                />

                <label htmlFor=''>Email</label>
                <input
                    type='text'
                    name='email'
                    value={userInfo.email}
                    onChange={changeInputHandle}
                    required
                />

                <label htmlFor=''>Phone Number</label>
                <input
                    type='number'
                    name='phoneNumber'
                    value={userInfo.phoneNumber}
                    onChange={changeInputHandle}
                    required
                />

                <label htmlFor=''>Display Name</label>
                <input
                    type='text'
                    name='displayName'
                    value={userInfo.displayName}
                    onChange={changeInputHandle}
                    required
                />

                <button type='submit'>Register</button>
                <button onClick={cancelHandle}>Cancel</button>
            </form>
        </div>
    )
}
