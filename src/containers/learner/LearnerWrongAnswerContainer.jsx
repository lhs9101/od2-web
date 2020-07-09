import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import { flexCenter } from "../../styles/helpers";
import BACK_WHITE from "../../images/back_white.svg";
import useLearnerInfo from "../../lib/hooks/useLearnerInfo";
import { getLearnerWrongAnswer } from "../../modules/learnerWrongAnswer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/common/Loading";
import FrameDialog from "../../components/learner/wrongAnswer/FrameDialog";
const domainCodeMap = {
    "1": "수와 연산",
    "2": "도형",
    "3": "측정",
    "4": "자료와 가능성",
    "5": "규칙성",
};
const Block = styled.div`
    .header {
        ${flexCenter}
        position: fixed;
        height: 50px;
        background-color: ${theme.colors.blue[1]};
        color: ${theme.colors.white[0]};
        top: 0;
        width: 100%;
        font-family: "NanumGothicBold";
        img {
            position: absolute;
            left: 15px;
            z-index: 10;
            width: 26px;
            height: 26px;
            cursor: pointer;
        }
    }
    .main {
        margin: auto;
        margin-top: 80px;
        max-width: 500px;
        padding: 20px;
        .title {
            font-size: 20px;
        }
        .card {
            background-color: ${theme.colors.gray[0]};
            box-shadow: ${theme.shadowSM};
            margin: 16px 0 16px 0;
            padding: 12px 20px 12px 20px;
            cursor: pointer;
        }
    }
`;
export default function LearnerWrongAnswerContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { learning_domain_code } = useParams();
    const domainName = domainCodeMap[learning_domain_code];
    const { learnerInfo } = useLearnerInfo({});
    const { data } = useSelector((state) => state.learnerWrongAnswer);
    useEffect(() => {
        if (learnerInfo.data) dispatch(getLearnerWrongAnswer({ ...learnerInfo.data[0], learning_domain_code }));
    }, [dispatch, learnerInfo.data, learning_domain_code]);
    const goBack = () => {
        history.push("/lms/sls2/learner/result/main");
    };
    const [modal, setModal] = useState(false);
    const [currentwrongAnswerIndex, setCurrentWrongAnswerIndex] = useState(null);

    const handleModalClose = () => {
        setModal(false);
    };
    const showWrongAnswerFrame = (index) => {
        setCurrentWrongAnswerIndex(index);
        setModal(true);
    };
    if (data)
        return (
            <Block>
                <div className="header">
                    <img src={BACK_WHITE} alt="뒤로가기" onClick={goBack} />
                    {domainName} 오답 확인
                </div>
                <div className="main">
                    <div className="title">학습목표</div>
                    {data.wrong_answer_infos.map((el, i) => (
                        <div className="card" key={i} onClick={() => showWrongAnswerFrame(i)}>
                            {el.learning_objective_description}
                        </div>
                    ))}
                </div>
                {modal && <FrameDialog onClose={handleModalClose} data={data.wrong_answer_infos[currentwrongAnswerIndex]} />}
            </Block>
        );
    else return <Loading />;
}
