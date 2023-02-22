import { createGlobalStyle } from "styled-components";
import { themeVariables } from "./variables";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Manrope', cursive;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${themeVariables.colors.textDark};
        transition: all ease-in-out 250ms;
    }

    #nprogress .bar {
        background: ${themeVariables.colors.primary};
    }

`;
