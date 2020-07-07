import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import ARROW_DROP_DOWN from "../../images/arrow_drop_down.svg";
import ARROW_DROP_UP from "../../images/arrow_drop_up.svg";
const Block = styled.div`
    position: relative;
    display: inline-block;
    outline: none;
    .selected {
        padding: 5px;
        width: ${({ width }) => width};
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
            flex-grow: 1;
        }
    }
    .border {
        border: 1px solid ${theme.colors.gray[2]};
        border-radius: 5px;
    }
    .menu-container {
        z-index: 100;
        position: absolute;
        width: ${({ width }) => width};
        background-color: ${theme.colors.white[0]};
    }
    .menu {
        padding: 5px;
        cursor: pointer;
        &:hover {
            background-color: ${theme.colors.gray[0]};
        }
    }
`;
export default function Dropdown({ placeHolder, menus, width = "150px", onSelect }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(placeHolder);
    const handleToggleOpen = () => {
        setOpen(!open);
    };
    const handleSelect = (e) => {
        setOpen(false);
        setSelected(e.target.innerText);
        if (onSelect) onSelect(menus.indexOf(e.target.innerText), e.target.innerText);
    };
    const handleBlur = () => {
        setOpen(false);
    };
    return (
        <Block width={width} tabIndex="-1" onBlur={handleBlur}>
            <div className="selected border" onClick={handleToggleOpen}>
                <span>{selected}</span>
                <img src={open ? ARROW_DROP_UP : ARROW_DROP_DOWN} alt="드롭다운" />
            </div>
            {open && (
                <div className="border menu-container">
                    {menus.map((el, i) => (
                        <div className="menu" key={el} onClick={handleSelect}>
                            {el}
                        </div>
                    ))}
                </div>
            )}
        </Block>
    );
}
