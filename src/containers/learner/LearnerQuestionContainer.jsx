import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import QuestionHeader from "../../components/learner/question/QuestionHeader";
import Loading from "../../components/common/Loading";
const Block = styled.div`
    height: 100%;
    iframe {
        width: 100%;
        height: 100%;
    }
`;
export default function LearnerQuestionContainer() {
    const { data, loading, error } = useSelector((state) => state.learnerQuestion);
    console.log(data, loading, error);

    if (data)
        return (
            <Block>
                <QuestionHeader rate={data.question_info.progress_rate} />
                <div>
                    <iframe title="frame" src={`https://od2.esls.io/lcms/frame-learning/M1/ko_KR/${data.question_info.next_question.frame_id}`} frameborder="0" />
                    <div>asdas</div>
                </div>
            </Block>
        );
    else return <Loading />;
}
