import React, { useEffect } from "react";
import ModalPortal from "./ModalPortal";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import { ModalContainer } from "../../styles/helpers";

const Block = styled.div`
    ${ModalContainer}
    .content {
        padding: 15px;
        width: 300px;
        max-width: 500px;
        background-color: ${theme.colors.white[0]};
    }
    .title {
        color: ${theme.colors.blue[2]};
        font-family: "NanumGothicBold";
        font-size: 20px;
        margin-bottom: 20px;
    }
    .body {
        margin-bottom: 20px;
    }
    .bottom {
        display: flex;
        justify-content: flex-end;
        span {
            cursor: pointer;
            color: ${theme.colors.blue[2]};
        }
        span + span {
            margin-left: 20px;
        }
    }
`;
export default function Dialog({ onClose, onYes }) {
    useEffect(() => {
        document.body.style.overflow = "hidden"; //스크롤 방지
        return () => {
            document.body.style.overflow = "initial";
        };
    }, []);

    const handleContentClick = (e) => {
        e.stopPropagation();
    };
    return (
        <ModalPortal>
            <Block onClick={onClose}>
                <div className="content" onClick={handleContentClick}>
                    <div className="title">로그아웃</div>
                    <div className="body">로그아웃 하시겠습니까?</div>
                    <div className="bottom">
                        <span onClick={onClose}>아니요</span>
                        <span onClick={onYes}>네</span>
                    </div>
                </div>
            </Block>
        </ModalPortal>
    );
}
