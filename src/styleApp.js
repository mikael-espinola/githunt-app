import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export const ButtonContainer = styled.button`
  position: absolute;
  top: 2%;
  right: 10%;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.buttonBG};
  color: #fff;
`;
