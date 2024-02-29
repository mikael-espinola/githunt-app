import React from "react";
import HashLoader from "react-spinners/HashLoader";

import * as s from "./style";

function Loader() {
  return (
    <s.Container>
      <HashLoader size={100} color="#36d7b7" />
    </s.Container>
  );
}

export default Loader;
