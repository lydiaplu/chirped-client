import styled, { css } from "styled-components";
import { media } from "./media";

export const FrameContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    box-sizing: border-box;
    

    ${media.desktop`
        /* flex-direction: row; */
        width: 100%;
        border: 1px solid blue;

    `}
`;

export const UserPart = styled.div`
    background-color: pink;
    width:100%;
    height: 100vh;

    ${media.phone`
        background-color: #1ac2ec;
    `}

    ${media.tablet`
        background-color: #1ac2ec;
    `}

    ${media.desktop`
        background-color: #ff00bb;
    `}
`;

export const PostPart = styled.div`
    background-color: yellow;
    width:100%;
    height: 100vh;


    ${media.desktop`
        background-color: orange;
    `}
`;
