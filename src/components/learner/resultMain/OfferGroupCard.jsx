import React from "react";
import styled from "styled-components";
import { BothEnds, flexCenter } from "../../../styles/helpers";
import BasicButton from "../../common/Button";
import ARROW_RIGHT from "../../../images/arrow_right_white.svg";
import { theme } from "../../../styles/globalStyle";
const Button = styled(BasicButton)`
    width: 90px;
    padding: 0px;
    font-size: 13px;
`;
const Block = styled.div`
    margin: 10px 0 10px 0;
    .title {
        ${BothEnds}
    }
    .card {
        display: flex;
        background-color: ${theme.colors.gray[0]};
        /* height: 50px; */
        margin: 10px 0 20px 0;
        .col {
            &:first-child {
                border-right: 3px solid ${theme.colors.gray[1]};
            }
            flex-grow: 1;
            flex-basis: 0;
            .el {
                ${flexCenter}
                padding: 5px 0 5px 0;
            }
        }
    }
    .green {
        color: ${theme.colors.green[0]};
    }
    .blue {
        color: ${theme.colors.blue[2]};
    }
    .bold {
        font-family: "NanumGothicBold";
    }
`;

export default function OfferGroupCard({ data, goWrongAnswer }) {
    return (
        <Block>
            <div className="title">
                <div className="left">
                    {data.index}. {data.name}
                </div>
                {data.wrong_question_count !== 0 && (
                    <Button onClick={() => goWrongAnswer(data.learning_domain_code)}>
                        오답 확인 <img src={ARROW_RIGHT} alt="화살표" />
                    </Button>
                )}
            </div>
            <div className="card">
                <div className="col">
                    <div className="el">성취율</div>
                    <div className="el bold">{Math.round((data.corrected_question_count / data.total_question_count) * 100)}%</div>
                </div>
                <div className="col">
                    <div className="el">전체</div>
                    <div className="el bold">{data.total_question_count}</div>
                </div>
                <div className="col">
                    <div className="el">정답 수</div>
                    <div className="el bold green">{data.corrected_question_count}</div>
                </div>
                <div className="col">
                    <div className="el">오답수</div>
                    <div className="el bold blue">{data.wrong_question_count}</div>
                </div>
            </div>
        </Block>
    );
}
