import styled from "styled-components";
import { theme } from "../../styles/globalStyle";

export default styled.button`
    width: 300px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.blue[1]};
    border: none;
    border-radius: 30px;
    color: ${theme.colors.white};
    font: inherit;
    font-family: "NanumGothicBold";
    cursor: pointer;
`;
