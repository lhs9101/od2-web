import React, { useMemo } from "react";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import Progress from "../../components/learner/assessmentMain/Progress";
import Learning from "../../components/learner/assessmentMain/Learning";
import AssessmentBox from "../../components/learner/assessmentMain/AssessmentBox";
import BasicButton from "../../components/common/Button";
import { useDispatch } from "react-redux";
import Loading from "../../components/common/Loading";
import MainLayout from "../../components/learner/MainLayout";
import { getLearnerQuestion, initializeLearnerQuestion } from "../../modules/learnerQuestion";
import { useHistory } from "react-router-dom";
import useLearnerInfo from "../../lib/hooks/useLearnerInfo";
const Button = styled(BasicButton)`
    width: 100%;
`;
const Block = styled(MainLayout)`
    .assessment-box-container {
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
        margin-top: 16px;
    }
    .button-wrapper {
        display: flex;
        justify-content: center;
        margin-top: 30px;
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
    const history = useHistory();
    const { learnerInfo, progressInfo } = useLearnerInfo({ needProgress: true });
    const dispatch = useDispatch();
    const startAssessment = () => {
        dispatch(initializeLearnerQuestion());
        dispatch(getLearnerQuestion({ ...learnerInfo.data[0], question_offer_group: "00" + (progressInfo.data.question_offer_group_status.indexOf("02") + 1) }));
        history.push("/lms/sls2/learner/question");
    };
    const offerGroup = useMemo(() => {
        if (progressInfo.data) return progressInfo.data.question_offer_group_status.indexOf("02") + 1;
        return 0;
    }, [progressInfo.data]);
    const assessmentDivision = useMemo(() => {
        if (learnerInfo.data) return learnerInfo.data[0].assessment_division_code === "000" ? "진단" : "총괄";
        return "진단";
    }, [learnerInfo.data]);
    if (progressInfo.data)
        return (
            <Block>
                <div className="row1">
                    <span>수학&nbsp;</span>
                    <span className="alphabet">{learnerInfo.data[0].grade_code}</span>
                    <span>&nbsp;등급 {assessmentDivision}</span>
                </div>
                <div>
                    {assessmentDivision}평가를 {progressInfo.data.status_code === "04" ? "완료하였습니다" : "진행 중입니다."}
                </div>
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
                {offerGroup !== 0 && (
                    <div className="button-wrapper">
                        <Button onClick={startAssessment}>평가 {offerGroup} 시작하기</Button>
                    </div>
                )}
            </Block>
        );
    else return <Loading />;
}
