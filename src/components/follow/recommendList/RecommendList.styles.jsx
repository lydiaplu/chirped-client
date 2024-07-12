import styled from "styled-components";
import { media } from "../../../styles/media";


export const RecommendListContainer = styled.div`
    display: none;
    margin-top: 1rem;
    margin-bottom:2rem;
    border: 1px solid rgb(239, 243, 244);
    border-radius: 2rem;
    padding: 1rem 0;

    ${media.desktop`
        display: block;
    `}
`;

export const RecommendTitle = styled.h3`
    padding-left: 2rem;
    margin-bottom: 1rem;
`;