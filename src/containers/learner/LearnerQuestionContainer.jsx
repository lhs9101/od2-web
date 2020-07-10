import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import QuestionHeader from "../../components/learner/question/QuestionHeader";
import Loading from "../../components/common/Loading";
import { useHistory } from "react-router-dom";
import KeepButton from "../../components/learner/question/KeepButton";
import { updateLearnerQuestionByKeep, updateLearnerQuestionByHistory } from "../../modules/learnerQuestion";
const Block = styled.div`
    height: 100%;
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: flex-start;
        height: ${({ orientation, width }) => (orientation === "portrait" ? "calc(100% - 50px)" : width * 0.625)};
    }
    .frame-container {
        position: relative;
        width: ${({ width }) => width}px;
        padding-top: ${({ width }) => width * 0.625}px;
        iframe {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
    .question-count {
        padding-top: 15px;
        text-align: center;
        font-size: 18px;
    }
    .question-info-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-self: ${({ orientation }) => (orientation === "portrait" ? "initial" : "flex-end")};
    }
`;
export default function LearnerQuestionContainer() {
    const { data, loading } = useSelector((state) => state.learnerQuestion);
    const history = useHistory();
    const dispatch = useDispatch();
    const [frameWidth, setFrameWidth] = useState(0);
    const [orientation, setOrientation] = useState("portrait");
    const onResize = useCallback(() => {
        const headerSize = 50;
        const keepSize = [170, 90]; //width,height
        const ratio = 0.625;
        const { innerHeight: height, innerWidth: width } = window;
        if (height - headerSize - keepSize[1] > width * ratio) {
            setOrientation("portrait");
            return setFrameWidth(width);
        }
        if ((width - keepSize[0]) * ratio < height - 50) {
            setOrientation("landscape");
            return setFrameWidth(width - keepSize[0]);
        }
        setOrientation("landscape");
        setFrameWidth((height - headerSize) / ratio);
    }, []);
    const onMessage = useCallback(
        (e) => {
            const message = e.data;
            switch (message.code) {
                case "77":
                    dispatch(
                        updateLearnerQuestionByHistory({
                            subject_code: data.question_info.subject_code,
                            assessment_division_code: data.question_info.assessment_division_code,
                            grade_code: data.question_info.grade_code,
                            question_number: data.question_info.next_question.question_number,
                            answer: message.answer,
                            corrected: message.corrected,
                            manual_scoring_yn: message.manual_scoring_yn,
                            solving_time: message.solving_time,
                            question_offer_group: data.question_info.question_offer_group,
                        })
                    );
                    break;

                default:
                    break;
            }
        },
        [data, dispatch]
    );
    const handleKeepBtnClick = () => {
        dispatch(
            updateLearnerQuestionByKeep({
                subject_code: data.question_info.subject_code,
                assessment_division_code: data.question_info.assessment_division_code,
                grade_code: data.question_info.grade_code,
                question_number: data.question_info.next_question.question_number,
                question_offer_group: data.question_info.question_offer_group,
            })
        );
    };
    useEffect(() => {
        if (!data && !loading) return history.replace("/lms/sls2/learner/assessment/main");
        if (data && data.status === "01") {
            history.replace(`/lms/sls2/learner/assessment/complete/${data.question_offer_group}`);
        }
    }, [data, history, loading]);
    useEffect(() => {
        window.addEventListener("message", onMessage);
        return () => {
            window.removeEventListener("message", onMessage);
        };
    }, [onMessage]);
    useEffect(() => {
        onResize();
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [onResize]);

    if (data)
        return (
            <Block width={frameWidth} orientation={orientation}>
                <QuestionHeader rate={data.question_info.progress_rate} />
                <div className="container">
                    <div className="frame-container">
                        <iframe
                            key={data.question_info.next_question.frame_id}
                            title="frame"
                            src={`${process.env.REACT_APP_HOST}/lcms/frame-learning/M1/ko_KR/${data.question_info.next_question.frame_id}`}
                            frameBorder="0"
                        />
                    </div>
                    <div className="question-info-container">
                        <KeepButton keepCount={data.question_info.keep_question_count} onClick={handleKeepBtnClick} />
                        <div className="question-count">
                            <span>{data.question_info.solved_question_count}</span>
                            <span>&nbsp;/&nbsp;</span>
                            <span>{data.question_info.total_question_count}</span>
                        </div>
                    </div>
                </div>
            </Block>
        );
    else return <Loading />;
}
