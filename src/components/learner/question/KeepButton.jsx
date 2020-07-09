import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/globalStyle";
import KEEP from "../../../images/keepBtn.svg";
const Block = styled.div`
    background-color: ${theme.colors.blue[0]};
    display: flex;
    padding: 10px;
    padding-left: 45px;
    position: relative;
    box-shadow: ${theme.shadow};
    cursor: pointer;
    .count {
        color: ${theme.colors.white[0]};
        left: 10px;
        top: 0;
        text-align: center;
        position: absolute;
        width: 25px;
        height: 30px;
        background-image: url(${KEEP});
        background-size: cover;
        background-repeat: no-repeat;
    }
    .text {
        color: ${theme.colors.blue[2]};
    }
`;
function KeepButton({ keepCount, onClick }) {
    return (
        <Block onClick={onClick}>
            <div className="count">{keepCount}</div>
            <div className="text">문제 다음에 풀기</div>
        </Block>
    );
}
export default React.memo(KeepButton);
