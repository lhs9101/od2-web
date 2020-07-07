import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/globalStyle";
const Block = styled.div`
    display: flex;
    & > div {
        flex-grow: 1;
        flex-basis: 0;
        padding: 0px 20px 0px 20px;
    }
    & > div:nth-child(1) {
        border-right: 2px solid ${theme.colors.gray[1]};
    }
    & > div:nth-child(2) {
        border-left: 2px solid ${theme.colors.gray[1]};
    }
    .data {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .number {
        font-family: "NanumGothicBold";
    }
`;
export default function Learning({ totalQuestionCount, solvedQuestionCount, solvingTime }) {
    return (
        <Block>
            <div>
                <div>문항 수</div>
                <div className="data number">
                    <span className="number">{solvedQuestionCount}</span>
                    <span>&nbsp;/&nbsp;</span>
                    <span className="number">{totalQuestionCount}</span>
                </div>
            </div>
            <div>
                <div>학습 시간</div>
                <div className="data">
                    <span className="number">{solvingTime}&nbsp;</span>
                    <span>분</span>
                </div>
            </div>
        </Block>
    );
}
