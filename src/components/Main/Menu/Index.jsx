import React from "react";

import * as s from "./style";

function Menu({ profile }) {
  return (
    <s.Container>
      <s.Profile>
        <s.ImageContainer>
          <s.Image src={profile.avatar_url}></s.Image>
        </s.ImageContainer>
        <s.NameContainer>
          <s.Name>{profile.name}</s.Name>
          <s.Nickname>{profile.login}</s.Nickname>
        </s.NameContainer>
      </s.Profile>
      <s.DetailsList>
        <s.DetailsItem>
          <h5>Following:</h5> <p>{profile.following}</p>
        </s.DetailsItem>
        <s.DetailsItem>
          <h5>Followers:</h5> <p>{profile.followers}</p>
        </s.DetailsItem>
        <s.DetailsItem>
          <h5>Repositories:</h5> <p>{profile.public_repos}</p>
        </s.DetailsItem>
        <s.DetailsItem>
          <h5>{profile.location}</h5>
        </s.DetailsItem>
      </s.DetailsList>
    </s.Container>
  );
}

export default Menu;
