import React, { useRef, useEffect } from "react";
import Button from "../common/Button";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import ToggleButton from "../common/ToggleButton";
import { setRememberLoginInfo, isRememberLoginInfo, getLearnerLoginInfo } from "../../lib/storage";

const Block = styled.div`
    margin-top: 48px;
    form {
        display: flex;
        flex-direction: column;
    }
    input {
        color: ${theme.colors.black[0]};
        font-size: 16px;
        font-weight: 400;
        align-self: center;
        width: 300px;
        max-width: 300px;
        border: none;
        border-bottom: ${theme.colors.blue[1]} 1px solid;
        padding: 10px;
        height: 45px;
        &:nth-child(2) {
            margin-top: 12px;
            margin-bottom: 15px;
        }
    }
    input[type="password"] {
        letter-spacing: 10px;
    }
    input::placeholder {
        letter-spacing: initial;
    }
    div {
        display: flex;
        justify-content: center;
    }
    .remember {
        display: flex;
        align-items: center;
        margin-bottom: 80px;
        span {
            margin-right: 10px;
        }
    }
`;
export default function SignInForm({ onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            username: e.target.username.value,
            password: e.target.password.value,
        });
    };
    const handleToggleButtonClick = (bool) => {
        setRememberLoginInfo(bool);
    };
    const formEl = useRef(null);

    useEffect(() => {
        if (isRememberLoginInfo()) {
            const info = getLearnerLoginInfo();
            if (info) {
                const splitInfo = info.split(";");
                formEl.current.username.value = splitInfo[0];
                formEl.current.password.value = splitInfo[1];
            }
        }
    }, []);
    return (
        <Block>
            <form action="" onSubmit={handleSubmit} ref={formEl}>
                <input autoComplete="on" type="text" name="username" placeholder="아이디" />
                <input autoComplete="on" type="password" name="password" placeholder="비밀번호" />
                <div className="remember">
                    <span>아이디와 비밀번호 기억하기</span>
                    <ToggleButton onClick={handleToggleButtonClick} initialState={isRememberLoginInfo()} />
                </div>
                <div>
                    <Button type="submit">로그인</Button>
                </div>
            </form>
        </Block>
    );
}
