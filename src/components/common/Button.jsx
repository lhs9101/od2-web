import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
const Button = styled.button`
    width: 300px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.blue[1]};
    border: none;
    border-radius: 30px;
    color: ${theme.colors.white};
    font-family: "NanumGothicBold";
    cursor: pointer;
    box-shadow: ${theme.shadow};
`;
export default Button;
