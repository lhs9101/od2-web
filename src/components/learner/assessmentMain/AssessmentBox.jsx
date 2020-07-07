import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/globalStyle";
const Block = styled.div`
    color: ${({ statusCode }) => (statusCode === "01" ? theme.colors.gray[2] : theme.colors.blue[2])};
    background-color: ${({ statusCode }) => (statusCode === "04" ? theme.colors.blue[0] : "inherit")};
    border: 2px solid ${theme.colors.blue[0]};
    flex-grow: 1;
    text-align: center;
    border-radius: 15px;
    & + & {
        margin-left: 15px;
    }
`;
export default function AssessmentBox({ index, statusCode }) {
    return (
        <Block statusCode={statusCode}>
            <div>평가</div>
            <div>{index + 1}</div>
        </Block>
    );
}
