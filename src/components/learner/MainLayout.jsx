import styled from "styled-components";
import { theme } from "../../styles/globalStyle";

const MainLayout = styled.div`
    padding: 16px;
    max-width: 500px;
    margin: auto;
    .row1 {
        font-size: ${theme.fontSize[1]};
    }
    .alphabet {
        color: ${theme.colors.blue[2]};
        font-family: "NanumGothicBold";
    }
`;
export default MainLayout;
