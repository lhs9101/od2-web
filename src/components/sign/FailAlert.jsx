import React from "react";
import styled from "styled-components";
import AlertImg from "../../images/alert.svg";
import { theme } from "../../styles/globalStyle";
const Block = styled.div`
    position: fixed;
    bottom: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    div {
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.red[2]};
        border: ${theme.colors.red[1]} 2px solid;
        border-radius: 3px;
        background-color: ${theme.colors.red[0]};
    }
`;
export default function FailAlert() {
    return (
        <Block>
            <div>
                <img src={AlertImg} alt="!" />
                아이디와 비밀번호를 확인하세요.
            </div>
        </Block>
    );
}
