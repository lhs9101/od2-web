import React from "react";
import styled from "styled-components";
import MypageHeader from "../../components/learner/mypage/MypageHeader";
import MypageMainContainer from "./MypageMainContainer";
const Block = styled.div`
    .main-wrapper {
        padding-top: 50px;
    }
`;
export default function MypageContainer() {
    return (
        <Block>
            <MypageHeader />
            <div className="main-wrapper">
                <MypageMainContainer />
            </div>
        </Block>
    );
}
