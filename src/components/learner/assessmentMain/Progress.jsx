import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/globalStyle";
const Block = styled.div`
    .rate {
        display: flex;
        justify-content: center;
    }
    .bar-container {
        padding: 20px;
    }
    .bar {
        background-color: ${theme.colors.gray[1]};
        border-radius: 15px;
        div {
            background: repeating-linear-gradient(45deg, ${theme.colors.blue[1]}, ${theme.colors.blue[1]} 5px, ${theme.colors.gray[2]} 5px, ${theme.colors.gray[2]} 10px);
            height: 30px;
            border-radius: 15px;
            width: ${({ rate }) => rate}%;
        }
    }
    .bar-text {
        margin-top: 5px;
        position: relative;
        span:nth-child(2) {
            position: absolute;
            right: 0;
        }
    }
`;
export default function Progress({ progressRate }) {
    return (
        <Block rate={progressRate}>
            <div>진척률</div>
            <div className="rate">{progressRate}%</div>
            <div className="bar-container">
                <div className="bar">
                    <div />
                </div>
                <div className="bar-text">
                    <span>0</span>
                    <span>100</span>
                </div>
            </div>
        </Block>
    );
}
