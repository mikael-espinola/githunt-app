import React from "react";

import * as s from "./style";

function Button({ type, link }) {
  return (
    <>
      {link ? (
        <s.Button>
          <a target="_blank" href={link}>
            {type}
          </a>
        </s.Button>
      ) : (
        <s.Button>{type}</s.Button>
      )}
    </>
  );
}

export default Button;
