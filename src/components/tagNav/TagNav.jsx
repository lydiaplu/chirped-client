import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { TagNavContainer, TagNavItem } from "./TagNav.styles"

export default function TagNav() {
    const [activeTab, setActiveTab] = useState('');
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        const path = location.pathname.split('/').pop();
        if (["following", "followers"].includes(path)) {
            setActiveTab(path);
        } else {
            setActiveTab("");
        }
    }, [location]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab.length === 0) {
            navigate(`/profile`);
        } else {
            navigate(`/profile/${tab.toLowerCase()}`);
        }

    }

    return (
        <TagNavContainer>
            <TagNavItem
                active={activeTab === ''}
                onClick={() => handleTabClick('')}
            >
                My Tweets
            </TagNavItem>
            <TagNavItem
                active={activeTab === 'following'}
                onClick={() => handleTabClick('following')}
            >
                Following
            </TagNavItem>
            <TagNavItem
                active={activeTab === 'followers'}
                onClick={() => handleTabClick('followers')}
            >
                Followers
            </TagNavItem>
        </TagNavContainer>
    );
}