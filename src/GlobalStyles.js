import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul {
        list-style-type: none;
    }

    body {
        background-color: #fff;
        font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
    }
`;
