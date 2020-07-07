import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/globalStyle";
import ProgressBar from "../../common/ProgressBar";
import CLOSE from "../../../images/close.svg";
const Block = styled.div`
    background-color: ${theme.colors.gray[0]};
    height: 45px;
    display: flex;
    .progress {
        flex-grow: 1;
        display: flex;
        align-items: center;
        padding: 0 40px 0 40px;
    }
    .rate-text {
        margin-left: 10px;
        font-family: "NanumGothicBold";
    }
    img {
        margin-right: 10px;
    }
`;
export default function QuestionHeader({ rate = 0 }) {
    return (
        <Block>
            <div className="progress">
                <ProgressBar rate={rate} height="20px" />
                <div className="rate-text">{rate}%</div>
            </div>
            <img src={CLOSE} alt="닫기" />
        </Block>
    );
}
