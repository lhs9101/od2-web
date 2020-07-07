import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLearnerInfo, getLearnerResult } from "../../modules/learnerAssessment";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import Loading from "../../components/common/Loading";
import MainLayout from "../../components/learner/MainLayout";
import UnderAssessment from "../../components/learner/resultMain/UnderAssessment";

const Block = styled(MainLayout)`
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export default function LearnerResultMainContainer() {
    const { learnerInfo, resultInfo } = useSelector((state) => state.learnerAssessment);

    const dispatch = useDispatch();
    useEffect(() => {
        if (learnerInfo.data) return;
        dispatch(getLearnerInfo());
    }, [dispatch, learnerInfo.data]);
    useEffect(() => {
        if (learnerInfo.data) dispatch(getLearnerResult(learnerInfo.data[0]));
    }, [dispatch, learnerInfo.data]);
    if (resultInfo.data)
        return (
            <Block>
                <div className="row1">
                    <span>수학&nbsp;</span>
                    <span className="alphabet">{learnerInfo.data[0].grade_code}</span>
                    <span>&nbsp;등급 진단</span>
                </div>
                {resultInfo.data.status_code === "02" && <UnderAssessment />}
            </Block>
        );
    else return <Loading />;
}
