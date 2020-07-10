import React from "react";
import styled from "styled-components";
import AlertImg from "../../images/alert.svg";
import { theme } from "../../styles/globalStyle";
const Block = styled.div`
    padding: 10px;
    div {
        padding: 10px;
        border: ${theme.colors.red[1]} 2px solid;
        border-radius: 3px;
    }
`;
export default function FailAlert() {
    return (
        <Block className="position-fixed d-flex justify-center w-100 bottom-0">
            <div className="d-flex justify-center align-center color-red-300 bg-red-100">
                <img src={AlertImg} alt="!" />
                아이디와 비밀번호를 확인하세요.
            </div>
        </Block>
    );
}
