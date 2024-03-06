import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 20em;
  max-height: max-content;
  margin-top: 0.5em;

  @media screen and (min-width: 750px) {
    flex-direction: row;
  }
`;
