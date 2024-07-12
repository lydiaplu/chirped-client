import React, { useState } from 'react'
import { FiMessageCircle } from 'react-icons/fi';

import { Icon, Text } from '../SocialPost.styles';
import { StyledModal } from '../../../styles/Modal.styles';
import { overlayCustomStyles } from '../../../styles/modalStyle';

import CommentList from '../../comment/CommentList';


export default function CommentIcon({ nums, tweet }) {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <StyledModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={overlayCustomStyles}
                contentLabel="Comments"
            >
                <CommentList tweet={tweet} />
            </StyledModal>

            <Icon onClick={openModal}>
                <FiMessageCircle />
                <Text>{nums}</Text>
            </Icon>
        </>

    )
}
