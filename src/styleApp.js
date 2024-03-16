import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export const ButtonContainer = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;
  padding: 0.3em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.buttonBG};
  color: #fff;
  font-size: 10px;

  @media screen and (min-width: 700px) {
    right: 8%;
    padding: 0.5em;
    font-size: 13px;
  }
`;
