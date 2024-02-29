import React, { useState } from "react";

import Image from "../assets/images/errVisual.png";
import * as s from "./style";

function Err({ userSearch }) {
  return (
    <s.Container>
      <s.ErrorImg src={Image} alt="Error" />
      <s.Text>{`Sorry... '${userSearch}' wasn't found. Try again.`}</s.Text>
    </s.Container>
  );
}

export default Err;
