import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import Progress from "../../components/learner/assessmentMain/Progress";
import Learning from "../../components/learner/assessmentMain/Learning";
import AssessmentBox from "../../components/learner/assessmentMain/AssessmentBox";
import Button from "../../components/common/Button";
import { useSelector, useDispatch } from "react-redux";
import { getLearnerInfo, getLearnerProgress } from "../../modules/learnerAssessment";
import Loading from "../../components/common/Loading";
const Block = styled.div`
    padding: 16px;
    max-width: 500px;
    margin: auto;
    .row1 {
        font-size: ${theme.fontSize[1]};
    }
    .alphabet {
        color: ${theme.colors.blue[2]};
        font-family: "NanumGothicBold";
    }
    .assessment-box-container {
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
        margin-top: 16px;
    }
    .button-wrapper {
        display: flex;
        justify-content: center;
    }
`;
const Card = styled.div`
    box-shadow: ${theme.shadow};
    padding: 1rem;
    margin-top: 10px;
    & + & {
        margin-bottom: 30px;
    }
`;
export default function LearnerAssessmentMainContainer() {
    const { learnerInfo, progressInfo } = useSelector((state) => state.learnerAssessment);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLearnerInfo());
    }, [dispatch]);
    useEffect(() => {
        if (learnerInfo.data) dispatch(getLearnerProgress(learnerInfo.data[0]));
    }, [dispatch, learnerInfo.data]);
    if (progressInfo.data)
        return (
            <Block>
                <div className="row1">
                    <span>수학&nbsp;</span>
                    <span className="alphabet">{learnerInfo.data[0].grade_code}</span>
                    <span>&nbsp;등급 진단</span>
                </div>
                <div>진단평가를 진행 중입니다.</div>
                <Card>
                    <Progress progressRate={progressInfo.data.progress_rate} />
                </Card>
                <Card>
                    <Learning totalQuestionCount={progressInfo.data.total_question_count} solvedQuestionCount={progressInfo.data.solved_question_count} solvingTime={progressInfo.data.solving_time} />
                </Card>
                <div>총 5개로 나누어 평가합니다.</div>
                <div className="assessment-box-container">
                    {progressInfo.data.question_offer_group_status.map((el, i) => (
                        <AssessmentBox key={i} statusCode={el} index={i} />
                    ))}
                </div>
                <div className="button-wrapper">
                    <Button>평가 {progressInfo.data.question_offer_group_status.indexOf("02") + 1} 시작하기</Button>
                </div>
            </Block>
        );
    else return <Loading />;
}
