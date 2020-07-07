import React from "react";
import styled from "styled-components";
import CLOSE from "../../../images/close.svg";
import { theme } from "../../../styles/globalStyle";
import { useHistory } from "react-router-dom";
const Block = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    top: 0;
    background: ${theme.colors.white[0]};

    div {
        font-size: 20px;
        font-family: "NanumGothicBold";
        color: ${theme.colors.blue[2]};
        position: absolute;
        left: 15px;
    }
    img {
        cursor: pointer;
        position: absolute;
        right: 15px;
    }
`;
export default function MypageHeader() {
    const history = useHistory();
    const handleBack = () => {
        history.goBack();
    };
    return (
        <Block>
            <div>내 정보</div>
            <img src={CLOSE} alt="닫기" onClick={handleBack} />
        </Block>
    );
}
