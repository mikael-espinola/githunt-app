import React from "react";

import * as s from "./style";
import Button from "../../Form/Button/Index";

function Content({ repositories }) {
  return (
    <s.Container>
      <s.RepositoriesList>
        {repositories.map((repo) => (
          <s.RepositoryItem key={repo.id}>
            <s.Name>{repo.name.toUpperCase()}</s.Name>
            <s.Description>{repo.description}</s.Description>
            <s.ButtonsContainer>
              <Button link={repo.html_url} type={"Repository"} />
              <Button link={repo.homepage} type={"Website"} />
            </s.ButtonsContainer>
          </s.RepositoryItem>
        ))}
      </s.RepositoriesList>
    </s.Container>
  );
}

export default Content;
