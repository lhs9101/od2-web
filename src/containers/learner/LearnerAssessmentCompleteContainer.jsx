import React from "react";
import { useParams, useHistory } from "react-router-dom";
import COMPLETE1 from "../../images/complete_1.svg";
import COMPLETE2 from "../../images/complete_2.svg";
import ENDING from "../../images/ending.svg";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import Button from "../../components/common/Button";
import { useDispatch } from "react-redux";
import { initializeLearnerQuestion, getLearnerQuestion } from "../../modules/learnerQuestion";
import useLearnerInfo from "../../lib/hooks/useLearnerInfo";
const Block = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding: 15px;
    .ending-img {
        background-image: url(${ENDING});
        height: 300px;
        background-size: contain;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
    }
    .main {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        img {
            width: 200px;
        }
    }
    .bottom {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        button {
            margin: 15px;
        }
    }
`;
const OutlineButton = styled(Button)`
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.blue[1]};
    color: ${theme.colors.blue[2]};
`;
const TextBlock = styled.div`
    .title {
        font-family: "NanumGothicBold";
        font-size: 24px;
        color: ${theme.colors.blue[2]};
        margin-bottom: 10px;
    }
`;
const imgs = [COMPLETE1, COMPLETE2];
export default function LearnerAssessmentCompleteContainer() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { question_offer_group } = useParams();
    const { learnerInfo, progressInfo } = useLearnerInfo({ needProgress: true });
    const offerGroup = question_offer_group === "all" ? null : Number(question_offer_group) - 1;
    const title = `평가${offerGroup ? offerGroup : ""} 완료`;
    const preposition = ["이", "가", "이", "가"][offerGroup - 1];
    const content = question_offer_group === "all" ? ["축하합니다.", "평가가 완료되었습니다."] : ["수고하셨습니다.", `평가${offerGroup}${preposition} 완료되었습니다.`];
    const goMain = () => history.push("/lms/sls2/learner/assessment/main");
    const goQuestion = () => {
        dispatch(initializeLearnerQuestion());
        dispatch(getLearnerQuestion({ ...learnerInfo.data[0], question_offer_group: "00" + (progressInfo.data.question_offer_group_status.indexOf("02") + 1) }));
        history.push("/lms/sls2/learner/question");
    };
    return (
        <Block>
            {!offerGroup && <div className="ending-img" />}
            <div className="main">
                <TextBlock>
                    <div className="title">{title}</div>
                    {content.map((el, i) => (
                        <div key={i}>{el}</div>
                    ))}
                </TextBlock>
                {offerGroup && <img src={imgs[Math.round(Math.random())]} alt="완료그림" />}
            </div>
            <div className="bottom">
                <Button onClick={goMain}>{offerGroup ? "평가 그만하기" : "확인"}</Button>
                {offerGroup && <OutlineButton onClick={goQuestion}>이어서 평가{offerGroup + 1} 진행하기</OutlineButton>}
            </div>
        </Block>
    );
}
