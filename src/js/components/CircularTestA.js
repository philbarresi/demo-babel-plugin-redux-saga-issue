import React from "react";
import CircularTestB from "testApp.components/CircularTestB";
import { TEST_A_TEXT } from "appText";

const CircularTestA = ({ level }) => {
  return (
    <div>
      <h2>
        {TEST_A_TEXT} {level}
      </h2>
      {level < 5 ? <CircularTestB level={level + 1} /> : null}
    </div>
  );
};

export default CircularTestA;
