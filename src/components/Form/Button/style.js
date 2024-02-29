import styled from "styled-components";

export const Button = styled.button`
  padding: 0.7em;
  border: none;
  border-radius: 0.5em;
  background-color: gray;
  color: #fff;

  cursor: pointer;

  @media screen and (min-width: 750px) {
    transform: scale(1);
    transition: transform 0.8s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
  }
  > a {
    text-decoration: none;
    color: #fff;
  }
`;
