import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { ModalContainer, BothEnds, flexCenter } from "../../../styles/helpers";
import { theme } from "../../../styles/globalStyle";
import ModalPortal from "../../common/ModalPortal";
import CLOSE from "../../../images/close.svg";
const Block = styled.div`
    ${ModalContainer}
    padding:20px;
    .content {
        width: 100%;
        height: calc((100vw - 70px) * 0.625px + 100px);
        background-color: ${theme.colors.white[0]};
        padding: 15px;
        display: flex;
        flex-direction: column;
        .header {
            font-size: 13px;
            font-family: "NanumGothicBold";
            ${BothEnds};
        }
        .wrong-description {
            color: ${theme.colors.red[3]};
            font-size: 13px;
            padding: 5px 0px 20px 0px;
        }
        .container {
            ${flexCenter}
            .iframe-container {
                flex-grow: 1;
                position: relative;
                width: ${({ screen }) => screen.width}px;
                padding-top: ${({ screen }) => screen.width * 0.625}px;
                iframe {
                    top: 0;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        img {
            cursor: pointer;
            height: 25px;
        }
    }
`;
const initialState = { orientation: "portrait", width: 0 };
function reducer(state, action) {
    const { innerHeight: height, innerWidth: width } = window;
    const padding = 70;
    const header = 70;
    if ((width - padding) * 0.625 < height - padding - header) {
        console.log("port");
        return {
            orientation: "portrait",
            width: width - padding,
        };
    }
    return {
        orientation: "portrait",
        width: (height - padding - header) / 0.625,
    };
}
export default function FrameDialog({ onClose, data }) {
    const [screen, dispatch] = useReducer(reducer, initialState);
    console.log(screen);

    useEffect(() => {
        document.body.style.overflow = "hidden"; //스크롤 방지
        return () => {
            document.body.style.overflow = "initial";
        };
    }, [data.right_answer, data.selection_answer_number]);
    const handleOnLoad = (e) => {
        e.target.contentWindow.postMessage(
            {
                diagnosisQuestionView: {
                    rightAnswer: Number(data.right_answer),
                    wrongAnswer: Number(data.selection_answer_number),
                },
            },
            "*"
        );
    };
    const handleContentClick = (e) => {
        e.stopPropagation();
    };
    useEffect(() => {
        dispatch();
        window.addEventListener("resize", dispatch);
        return () => {
            window.removeEventListener("resize", dispatch);
        };
    }, []);
    return (
        <ModalPortal>
            <Block onClick={onClose} screen={screen}>
                <div className="content" onClick={handleContentClick}>
                    <div className="header">
                        <div className="left">{data.learning_objective_description}</div>
                        <img src={CLOSE} alt="닫기" onClick={onClose} />
                    </div>
                    <div className="wrong-description">{data.wrong_answer_example_description}</div>
                    <div className="container">
                        <div className="iframe-container">
                            <iframe onLoad={handleOnLoad} title="frame" src={`https://od2.esls.io/lcms/frame-replay/ko_KR/${data.frame_id}`} frameBorder="0" />
                        </div>
                    </div>
                </div>
            </Block>
        </ModalPortal>
    );
}
