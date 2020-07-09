import React from "react";
import styled from "styled-components";
import Loading from "../../components/common/Loading";
import MainLayout from "../../components/learner/MainLayout";
import UnderAssessment from "../../components/learner/resultMain/UnderAssessment";
import CompleteBadge from "../../components/learner/resultMain/CompleteBadge";
import useLearnerInfo from "../../lib/hooks/useLearnerInfo";
import ReportCard from "../../components/learner/resultMain/ReportCard";
import OfferGroupCard from "../../components/learner/resultMain/OfferGroupCard";
import { useHistory } from "react-router-dom";

const Block = styled(MainLayout)`
    height: 100%;
    display: flex;
    flex-direction: column;
    .row1 {
        display: flex;
        align-items: center;
        div:first-child {
            flex-grow: 1;
        }
    }
    .report-container {
        margin-top: 20px;
    }
    .offer-group-title {
        font-size: 20px;
        margin-top: 30px;
    }
`;
export default function LearnerResultMainContainer() {
    const { learnerInfo, resultInfo } = useLearnerInfo({ needResult: true });
    const data = resultInfo.data;
    const history = useHistory();
    const goWrongAnswer = (learning_domain_code) => {
        history.push(`/lms/sls2/learner/result/wrong-answer/${learning_domain_code}`);
    };
    if (data)
        return (
            <Block>
                <div className="row1">
                    <div>
                        <span>수학&nbsp;</span>
                        <span className="alphabet">{learnerInfo.data[0].grade_code}</span>
                        <span>&nbsp;등급 진단</span>
                    </div>
                    <div>{data.status_code === "04" && <CompleteBadge completeDate={data.completion_date} />}</div>
                </div>
                {data.status_code !== "04" && <UnderAssessment />}
                {data.status_code === "04" && (
                    <div className="report-container">
                        <ReportCard
                            achievementDegree={data.achievement_degree}
                            totalQuestionCount={data.total_question_count}
                            correctedQuestionCount={data.corrected_question_count}
                            solvingTime={data.solving_time}
                        />
                        <div className="offer-group-title">영역별 결과 보기</div>
                        {data.learning_domain_reports.map((el, i) => (
                            <OfferGroupCard key={el.learning_domain_code} data={{ ...el, index: i + 1 }} goWrongAnswer={goWrongAnswer} />
                        ))}
                    </div>
                )}
            </Block>
        );
    else return <Loading />;
}
