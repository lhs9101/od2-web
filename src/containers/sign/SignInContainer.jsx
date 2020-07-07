import React, { useState } from "react";
import SignInForm from "../../components/sign/SignInForm";
import SignInHeader from "../../components/sign/SignInHeader";
import { requestSignIn } from "../../lib/api";
import FailAlert from "../../components/sign/FailAlert";
import { useHistory } from "react-router-dom";
import { isRememberLoginInfo, setLearnerLoginInfo } from "../../lib/storage";
export default function SignInContainer() {
    const [mode, setMode] = useState("learner");
    const [showAleret, setShowAleret] = useState(false);
    const history = useHistory();
    const handleSubmit = (data) => {
        requestSignIn({ mode, body: data }).then((result) => {
            if (result.flag === "fail") {
                setShowAleret(true);
                setTimeout(() => {
                    setShowAleret(false);
                }, 1500);
                return;
            }
            if (isRememberLoginInfo()) {
                if (mode === "learner") {
                    setLearnerLoginInfo(data.username + ";" + data.password);
                } else {
                    //TODO: teacher
                }
            }
            history.push("/lms/sls2/learner/assessment/main");
        });
    };
    return (
        <>
            <SignInHeader mode={mode} setMode={setMode} />
            <SignInForm onSubmit={handleSubmit} />
            {showAleret && <FailAlert />}
        </>
    );
}
