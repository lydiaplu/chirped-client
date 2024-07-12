import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi';
import { Icon } from '../SocialPost.styles';
import { StyledModal } from '../../../styles/Modal.styles';
import { overlayCustomStyles } from '../../../styles/modalStyle';
import PostCreator from '../../postCreator/PostCreator';

export default function EditIcon({tweet}) {
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
                <PostCreator tweet={tweet} setModalIsOpen={setIsOpen} />
            </StyledModal>

            <Icon onClick={openModal}>
                <FiEdit2 size="1.5rem" />
            </Icon>
        </>

    )
}
