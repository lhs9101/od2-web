import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import LearnerPage from "./pages/LearnerPage";
import LearnerMyPage from "./pages/LearnerMyPage";

function App() {
    return (
        <Switch>
            <Route path="/lms/sls2/sign-in" component={SignInPage} />
            <Route path="/lms/sls2/learner/my-page/main" component={LearnerMyPage} />
            <Route path="/lms/sls2/learner" component={LearnerPage} />
            <Route path="/">
                <Redirect to="/lms/sls2/sign-in" />
            </Route>
        </Switch>
    );
}

export default App;
