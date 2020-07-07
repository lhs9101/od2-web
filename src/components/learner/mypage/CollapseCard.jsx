import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/globalStyle";
import ARROW_DOWN from "../../../images/arrow_down.svg";
import ARROW_UP from "../../../images/arrow_up.svg";
const Block = styled.div`
    background-color: ${theme.colors.gray[0]};
    padding: 8px;
    margin: 16px 0 16px 0;
    cursor: pointer;
    .question {
        font-family: ${({ answerHeight }) => (answerHeight === "0px" ? "unset" : "NanumGothicBold")};
        display: flex;
        padding: 8px;
        span {
            flex-grow: 1;
        }
    }
    .answer {
        div {
            padding: 8px;
            border-top: 1px solid ${theme.colors.gray[2]};
        }

        overflow: hidden;
        height: 30px;
        transition: height 0.3s;
        height: ${({ answerHeight }) => answerHeight};
    }
`;
export default function CollapseCard({ question, answer, open = false, onClick }) {
    const answerContainer = useRef(null);
    const answerHeight = useRef(0);
    const [height, setHeight] = useState("auto");
    useEffect(() => {
        answerHeight.current = answerContainer.current.offsetHeight;
    }, []);
    useEffect(() => {
        setHeight(open ? answerHeight.current + "px" : "0px");
    }, [open]);
    return (
        <Block answerHeight={height} onClick={onClick}>
            <div className="question">
                <span>{question}</span>
                <img src={open ? ARROW_UP : ARROW_DOWN} alt="열림" />
            </div>
            <div ref={answerContainer} className="answer">
                <div>{answer}</div>
            </div>
        </Block>
    );
}
