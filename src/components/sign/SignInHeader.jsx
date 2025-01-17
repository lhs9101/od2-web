import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import JEI from "../../images/JEI_login.svg";
import ONLINE_JINDAN from "../../images/login_3.svg";
import PERSON1 from "../../images/login_1.svg";
import PERSON2 from "../../images/login_2.svg";
import TabNavigation from "../common/TabNavigation";
const Block = styled.div`
    height: 240px;
    .jei {
        margin: 20px 0 0 65px;
        width: 70px;
        height: 52px;
    }
    .online_jindan {
        margin-left: 65px;
        width: 110px;
        height: 22.81px;
    }
    .person1 {
        width: 65px;
        height: 150px;
    }
    .person2 {
        width: 98px;
        height: 150px;
    }
    .tab-nav-wrapper {
        bottom: 0;
        width: 100%;
    }
`;
const modes = ["learner", "teacher"];
export default function SignInHeader({ mode, setMode }) {
    const handleClick = (index) => {
        setMode(modes[index]);
    };
    return (
        <Block className="position-relative bg-blue-100">
            <div>
                <img className="jei" src={JEI} alt="" />
            </div>
            <div>
                <img className="online_jindan" src={ONLINE_JINDAN} alt="" />
            </div>
            <img className="person1 position-absolute left-0 bottom-0" src={PERSON1} alt="" />
            <img className="person2 position-absolute right-0 bottom-0" src={PERSON2} alt="" />
            <div className="tab-nav-wrapper d-flex justify-center position-absolute">
                <TabNavigation tabs={["학습자", "선생님"]} initialIndex={modes.indexOf(mode)} onClick={handleClick} />
            </div>
        </Block>
    );
}
