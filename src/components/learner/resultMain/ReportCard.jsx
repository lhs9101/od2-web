import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/globalStyle";
import { flexCenter } from "../../../styles/helpers";
const Block = styled.div`
    box-shadow: ${theme.shadow};
    display: flex;
    height: 150px;
    & > div {
        flex-grow: 1;
    }
    .col1 {
        display: flex;
        flex-direction: column;
        border-right: 2px solid ${theme.colors.gray[1]};
        & > div:first-child {
            padding: 10px 0 10px 10px;
        }
        .graph-container {
            height: 100%;
            display: flex;
            justify-content: center;
            .y-axis {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                padding-right: 3px;
                height: 100%;
                font-size: 13px;
                border-right: 1px solid ${theme.colors.gray[2]};
                width: 30px;
                span {
                    flex-grow: 1;
                    display: flex;
                }
                span:nth-child(1) {
                }
                span:nth-child(2) {
                    align-items: center;
                }
                span:nth-child(3) {
                    align-items: flex-end;
                }
            }
            .half {
                height: 50%;
                width: 10px;
                border-bottom: 1px solid ${theme.colors.gray[2]};
            }
            .bar {
                margin-left: 30px;
                align-self: flex-end;
                height: ${({ achievementDegree }) => achievementDegree}%;
                background-color: ${theme.colors.green[0]};
                width: 30px;
                display: flex;
                justify-content: center;
                position: relative;
                span {
                    font-family: "NanumGothicBold";
                    position: absolute;
                    top: -25px;
                }
            }
        }
    }
    .col2 {
        ${flexCenter}
        flex-direction:column;
        padding: 15px;
        .mb15 {
            margin-bottom: 15px;
        }
        .right {
            margin-left: 100px;
        }
        .bold {
            font-family: "NanumGothicBold";
        }
        .green {
            color: ${theme.colors.green[0]};
        }
    }
`;

export default function ReportCard({ achievementDegree, totalQuestionCount, correctedQuestionCount, solvingTime }) {
    return (
        <Block achievementDegree={achievementDegree}>
            <div className="col1">
                <div>성취율</div>
                <div className="graph-container">
                    <div className="y-axis">
                        <span>100</span>
                        <span>50</span>
                        <span>0</span>
                    </div>
                    <div className="half" />
                    <div className="bar">
                        <span>{achievementDegree}%</span>
                    </div>
                </div>
            </div>
            <div className="col2">
                <div>
                    <div>정답 / 문항 수</div>
                    <div className="right mb15 bold">
                        <span className="green">{correctedQuestionCount}</span>
                        <span>&nbsp;/&nbsp;</span>
                        <span>{totalQuestionCount}</span>
                    </div>
                    <div>학습 시간</div>
                    <div className="right">
                        <span className="bold">{solvingTime}</span>
                        <span>&nbsp;분</span>
                    </div>
                </div>
            </div>
        </Block>
    );
}
