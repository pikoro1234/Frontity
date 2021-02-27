import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/mi-primer-tema/src/index.js</pre>
      <h1>hola mundo</h1>
    </>
  );
};

export default {
  name: "mi-primer-tema",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
