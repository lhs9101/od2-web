import React from "react";
import styled from "styled-components";
import ProgressBar from "../../common/ProgressBar";
const Block = styled.div`
    .rate {
        display: flex;
        justify-content: center;
        font-family: "NanumGothicBold";
        font-size: 18px;
    }
    .bar-container {
        padding: 20px;
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

            <div className="bar-container">
                <div className="rate">{progressRate}%</div>
                <ProgressBar />
                <div className="bar-text">
                    <span>0</span>
                    <span>100</span>
                </div>
            </div>
        </Block>
    );
}
