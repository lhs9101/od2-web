import React from "react";
import LearnerAssessmentMainContainer from "../containers/learner/LearnerAssessmentMainContainer";
import LearnerHeader from "../components/learner/LearnerHeader";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import LearnerResultMainContainer from "../containers/learner/LearnerResultMainContainer";
import styled from "styled-components";

const Main = styled.div`
    margin-top: 111px;
`;
export default function LearnerPage() {
    const { path } = useRouteMatch();
    const { pathname } = useLocation();

    return (
        <>
            <LearnerHeader initialIndex={pathname.indexOf("result") !== -1 ? 1 : 0} />
            <Main>
                <Switch>
                    <Route path={`${path}/assessment/main`} component={LearnerAssessmentMainContainer} />
                    <Route path={`${path}/result/main`} component={LearnerResultMainContainer} />
                </Switch>
            </Main>
        </>
    );
}
