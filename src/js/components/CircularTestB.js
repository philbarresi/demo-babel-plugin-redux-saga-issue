import React from "react";
import CircularTestA from "testApp.components/CircularTestA";

const CircularTestB = ({ level }) => {
  return (
    <div>
      <h2>Test B Level {level}</h2>
      {level < 5 ? <CircularTestA level={level + 1} /> : null}
    </div>
  );
};

export default CircularTestB;
