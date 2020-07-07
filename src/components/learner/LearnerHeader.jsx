import React from "react";
import LOGO_1 from "../../images/logo_1.svg";
import MYPAGE from "../../images/mypage.svg";
import TabNavigation from "../common/TabNavigation";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import { useHistory } from "react-router-dom";
const Block = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${theme.colors.gray[0]};
    padding: 16px;
    .row1 {
        display: flex;
        align-items: center;
        position: relative;
        height: 40px;
    }
    img:nth-child(1) {
        width: 100px;
        height: 20.73px;
    }
    img:nth-child(2) {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 0;
        cursor: pointer;
    }
    .tab-nav-wrapper {
        display: flex;
        justify-content: center;
    }
`;
export default function LearnerHeader({ initialIndex }) {
    const history = useHistory();
    const handleClick = (i) => {
        const urls = ["/lms/sls2/learner/assessment/main", "/lms/sls2/learner/result/main"];
        history.push(urls[i]);
    };
    const handleMyPageClick = () => {
        history.push("/lms/sls2/learner/my-page/main");
    };
    return (
        <Block>
            <div className="row1">
                <img src={LOGO_1} alt="온라인 진단" />
                <img src={MYPAGE} alt="마이 페이지" onClick={handleMyPageClick} />
            </div>
            <div className="tab-nav-wrapper">
                <TabNavigation tabs={["평가하기", "결과보기"]} type={1} onClick={handleClick} initialIndex={initialIndex} />
            </div>
        </Block>
    );
}
