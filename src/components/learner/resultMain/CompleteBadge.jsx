import React from "react";
import { dateFormat } from "../../../lib/util";
import styled from "styled-components";
import { theme } from "../../../styles/globalStyle";
const Block = styled.div`
    font-size: 13px;
    padding: 4px 8px 4px 8px;
    border-radius: 20px;
    border: 1px solid ${theme.colors.green[0]};
    text-align: center;
    span {
        color: ${theme.colors.green[0]};
    }
`;
export default function CompleteBadge({ completeDate }) {
    return (
        <Block>
            {dateFormat(completeDate)}
            <span>완료</span>
        </Block>
    );
}
