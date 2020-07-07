import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
const Container = styled.div`
    display: inline-block;
    width: 40px;
    height: 25px;
    background: ${({ switchState }) => (switchState ? theme.colors.green[0] : theme.colors.gray[2])};
    border-radius: 15px;
    position: relative;
    transition: all 0.1s;
    cursor: pointer;
    span {
        position: absolute;
        width: 19px;
        height: 19px;
        background-color: ${theme.colors.white[0]};
        top: 3px;
        border-radius: 50%;
        left: ${(props) => (props.switchState ? "19px" : "3px")};
        transition: all 0.1s linear;
    }
`;
export default function ToggleButton({ initialState, onClick }) {
    const [onState, setOnState] = useState(!!initialState);
    const handleClick = () => {
        setOnState(!onState);
        if (onClick) onClick(!onState);
    };
    return (
        <Container switchState={onState} onClick={handleClick}>
            <span />
        </Container>
    );
}
