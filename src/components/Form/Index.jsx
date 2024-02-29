import React, { useState } from "react";

import * as s from "./style";
import Button from "./Button/Index";

function Form({ setUserSearch }) {
  const [param, setParam] = useState();

  const getParam = (e) => {
    e.preventDefault();
    let text = e.target.value;
    setParam(text);
  };

  const sendParam = (e) => {
    e.preventDefault();
    param && setUserSearch(param);
  };

  return (
    <>
      <s.Form onSubmit={sendParam}>
        <s.Input
          onChange={(e) => getParam(e)}
          placeholder="Enter the user here..."
        />
        <Button type={"search"} />
      </s.Form>
    </>
  );
}

export default Form;
