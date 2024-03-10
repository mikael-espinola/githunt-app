import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: max-content;
  border-bottom: 1px solid black;
  padding: 0.3em;

  @media screen and (min-width: 750px) {
    width: 30%;
    border: none;
  }
`;
export const Profile = styled.div``;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Image = styled.img`
  width: 275px;
  height: 275px;
  border-radius: 10em;
  padding: 0.5em;
  object-fit: cover;
  @media screen and (min-width: 750px) {
    width: 325px;
    height: 325px;
  }
`;

export const NameContainer = styled.div`
  padding: 0.7em;
`;
export const Name = styled.h1``;
export const Nickname = styled.h4`
  display: inline-block;
  > a {
    cursor: pointer;
    text-decoration: none;
    color: black;
    &:hover {
      color: blue;
    }
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
  padding: 0.3em;
`;
export const DetailsItem = styled.li`
  text-align: center;
  > p {
    font-weight: 400;
  }
`;
