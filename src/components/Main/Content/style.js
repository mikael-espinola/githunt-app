import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.3em;

  @media screen and (min-width: 750px) {
    width: 50%;
  }
`;

export const RepositoriesList = styled.ul``;
export const RepositoryItem = styled.li`
  border: ${(props) => props.theme.border};
  border-radius: 5px;
  margin-bottom: 1em;
`;
export const Name = styled.h2`
  padding: 0.8em;
`;
export const Description = styled.p`
  font-size: 14px;
  padding: 0.3em;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0.5em;
`;
