import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 750px) {
    width: 70%;
  }
`;

export const Input = styled.input`
  padding: 0.4em;
  width: 70%;
  margin-right: 1em;

  @media screen and (min-width: 750px) {
    width: 90%;
  }
`;
