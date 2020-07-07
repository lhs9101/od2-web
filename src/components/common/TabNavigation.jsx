import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/globalStyle";
import clx from "classnames";
const Block0 = styled.div`
    display: flex;
    .tab {
        padding: 12px;
        cursor: pointer;
        color: ${theme.colors.gray[3]};
    }
    .tab.selected {
        border-bottom: 3px solid ${theme.colors.blue[1]};
        color: ${theme.colors.black[0]};
    }
`;
const Block1 = styled.div`
    display: inline-flex;
    background-color: ${theme.colors.white[0]};
    border-radius: 30px;
    border: 2px solid ${theme.colors.blue[1]};
    .tab {
        padding: 3px 20px 3px 20px;
        cursor: pointer;
        color: ${theme.colors.black[0]};
        border-radius: 16px;
    }
    .tab.selected {
        color: ${theme.colors.white[0]};
        background-color: ${theme.colors.blue[1]};
    }
`;
export default function TabNavigation({ tabs, onClick, initialIndex, type = 0 }) {
    const [index, setIndex] = useState(initialIndex || 0);
    const handleClick = (index) => {
        setIndex(index);
        if (onClick) onClick(index);
    };
    const madeTabs = tabs.map((el, i) => (
        <div key={el} className={clx("tab", { selected: index === i })} onClick={() => handleClick(i)}>
            {el}
        </div>
    ));
    if (type === 0) return <Block0>{madeTabs}</Block0>;
    if (type === 1) return <Block1>{madeTabs}</Block1>;
}
