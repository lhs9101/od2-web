import React from "react";
import styled, { keyframes } from "styled-components";
import ModalPortal from "./ModalPortal";
import { theme } from "../../styles/globalStyle";
const skBounce = keyframes`
    0%,80%,100% {
		transform: scale(0);
	}
	40% {
		transform: scale(1.0);
	}
`;
const Block = styled.div`
    width: 100%;
    height: 100%;
    pointer-events: auto;
    background: rgb(0, 0, 0, 0.2);
    #loader {
        width: 60px;
        text-align: center;
        position: absolute;
        left: calc(50vw - 30px);
        top: 50vh;
        .bounce1 {
            animation-delay: -0.32s;
        }
        .bounce2 {
            animation-delay: -0.16s;
        }
        & > div {
            width: 16px;
            height: 16px;
            background-color: #fbae17;
            margin: 2px;
            border-radius: 50%;
            display: inline-block;
            animation: ${skBounce} 1.4s infinite ease-in-out both;
        }
    }
`;
export default function Loading() {
    return (
        <ModalPortal>
            <Block>
                <div id="loader">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                </div>
            </Block>
        </ModalPortal>
    );
}
