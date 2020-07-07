import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
const Block = styled.div`
    background-color: ${theme.colors.gray[1]};
    border-radius: 15px;
    width: 100%;
    div {
        background: repeating-linear-gradient(45deg, ${theme.colors.blue[1]}, ${theme.colors.blue[1]} 5px, ${theme.colors.gray[2]} 5px, ${theme.colors.gray[2]} 10px);
        height: ${({ _height }) => _height};
        border-radius: 15px;
        width: ${({ rate }) => rate}%;
    }
`;
export default function ProgressBar({ rate, height = "30px" }) {
    return (
        <Block rate={rate} _height={height}>
            <div />
        </Block>
    );
}
