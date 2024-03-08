import React from "react";
import Form from "../Form/Index";

import * as s from "./style";

function Header({ setUserSearch, userSearch }) {
  return (
    <s.Container>
      <s.Title>GitHunt</s.Title>
      <Form userSearch={userSearch} setUserSearch={setUserSearch} />
    </s.Container>
  );
}

export default Header;
