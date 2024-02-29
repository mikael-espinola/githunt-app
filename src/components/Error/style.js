import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ErrorImg = styled.img`
  width: 200px;
  height: 200px;

  @media screen and (max-width: 700px) {
    width: 150px;
    height: 150px;
    margin-bottom: 2em;
  }
`;

export const Text = styled.strong`
  font-size: 15px;
  padding: 0.5em;
`;
