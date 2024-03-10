import React, { useState } from "react";

import * as s from "./style";
import Button from "./Button/Index";
import useDebounce from "../Hooks/useDebounce";

function Form({ setUserSearch, userSearch }) {
  const [param, setParam] = useState(userSearch);

  const debounceChange = useDebounce((param) => {
    setUserSearch(param);
  }, 200);

  const getParam = (e) => {
    const text = e.target.value;
    setParam(text);
    debounceChange(text);
  };

  return (
    <>
      <s.Form>
        <s.Input
          type="search"
          onChange={getParam}
          placeholder="Enter the username here..."
          value={param}
        />
      </s.Form>
    </>
  );
}

export default Form;
