import styled from "styled-components";
import { media } from "../../styles/media";

export const FrameContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

    ${media.desktop`
        flex-direction: row;
        max-width: 1024px;
        margin: 0 auto;
    `}
`;

export const UserPart = styled.div`
    ${media.phone`
        /* background-color: #65e5d4; */
    `}

    ${media.tablet`
        /* background-color: #7665e5; */
    `}

    ${media.desktop`
        width: 30%;
        height: 100vh;
        margin-right: 3rem;
        /* background-color: #ff00bb; */
    `}
`;

export const PostPart = styled.div`
    flex-grow: 1;
    overflow: auto;

    ${media.desktop`
        width: 70%;
        min-height: 100vh;
    `}
`;
