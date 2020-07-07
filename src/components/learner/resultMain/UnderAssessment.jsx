import React from "react";
import RESULT from "../../../images/result.svg";
import styled from "styled-components";
const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    img {
        width: 250px;
        margin-bottom: 20px;
    }
    flex-grow: 1;
`;
export default function UnderAssessment() {
    return (
        <Block>
            <img src={RESULT} alt="" />
            <div>평가를 진행 중입니다.</div>
        </Block>
    );
}
