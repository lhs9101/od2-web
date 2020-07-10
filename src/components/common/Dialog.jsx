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
    }
    .title {
        font-size: 20px;
        margin-bottom: 20px;
    }
    .body {
        margin-bottom: 20px;
    }
    span + span {
        margin-left: 20px;
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
                <div className="content bg-white-100" onClick={handleContentClick}>
                    <div className="title color-blue-300 ngb">로그아웃</div>
                    <div className="body">로그아웃 하시겠습니까?</div>
                    <div className="d-flex justify-end color-blue-300">
                        <span className="cursor-pointer" onClick={onClose}>
                            아니요
                        </span>
                        <span className="cursor-pointer" onClick={onYes}>
                            네
                        </span>
                    </div>
                </div>
            </Block>
        </ModalPortal>
    );
}
