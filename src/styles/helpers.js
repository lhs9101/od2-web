import { css } from "styled-components";

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BothEnds = css`
    display: flex;
    .left {
        flex-grow: 1;
    }
`;

export const ModalContainer = css`
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    pointer-events: auto;
`;
