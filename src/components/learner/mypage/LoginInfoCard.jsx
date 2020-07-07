import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/globalStyle";
const Block = styled.div`
    line-height: 2;
    box-shadow: ${theme.shadow};
    display: flex;
    padding: 10px;
    .emphasis {
        margin-left: 13px;
        font-family: "NanumGothicBold";
    }
`;
export default function LoginInfoCard({ profileId, pinNumber }) {
    return (
        <Block>
            <div>
                <div>아이디</div>
                <div>비밀번호</div>
            </div>
            <div className="emphasis">
                <div>{profileId}</div>
                <div>{pinNumber}</div>
            </div>
        </Block>
    );
}
