import { createGlobalStyle } from "styled-components";
import NanumGothic from "../fonts/NanumGothic-Regular.woff";
import NanumGothicBold from "../fonts/NanumGothic-Bold.woff";

export const theme = {
    colors: {
        blue: ["rgb(203, 232, 248)", "#60A8F4", "#0353A6"],
        white: ["#fff"],
        gray: ["#f8f7f8", "#e9ecef", "#DDD", "#898989"],
        black: ["#545454"],
        green: ["rgb(41, 159, 76)"],
        red: ["#f8d7da", "#f5c6cb", "#721c24", "#F06A64"],
    },
    shadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    shadowSM: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
    fontSize: ["1rem", "1.25rem", "1.5rem"],
};
export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "NanumGothic" format("woff");
        src: url(${NanumGothic});
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "NanumGothicBold" format("woff");
        src: url(${NanumGothicBold});
        font-weight: normal;
        font-style: normal;
    }

    body {
        width:100vw;
        height:100vh;
        font-family: "NanumGothic", sans-serif ;
        font-weight:500;
        color:${theme.colors.black[0]};
        line-height:1.6;
    }
    ${theme.colors.blue.map((el, i) => `.color-blue-${(i + 1) * 100}{color:${el};} .bg-blue-${(i + 1) * 100}{background-color:${el};}`)}
    ${theme.colors.gray.map((el, i) => `.color-gray-${(i + 1) * 100}{color:${el};} .bg-gray-${(i + 1) * 100}{background-color:${el};}`)}
    ${theme.colors.white.map((el, i) => `.color-white-${(i + 1) * 100}{color:${el};} .bg-white-${(i + 1) * 100}{background-color:${el};}`)}
    ${theme.colors.green.map((el, i) => `.color-green-${(i + 1) * 100}{color:${el};} .bg-green-${(i + 1) * 100}{background-color:${el};}`)}
    ${theme.colors.black.map((el, i) => `.color-black-${(i + 1) * 100}{color:${el};} .bg-black-${(i + 1) * 100}{background-color:${el};}`)}
    ${theme.colors.red.map((el, i) => `.color-red-${(i + 1) * 100}{color:${el};} .bg-red-${(i + 1) * 100}{background-color:${el};}`)}
`;
