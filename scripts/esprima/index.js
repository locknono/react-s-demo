const esprima = require("esprima");
const { writeFileSync } = require("fs");

const res = esprima.parseModule(
  `import React from "react";

function Demo(props) {
  return <div dangerouslySetInnerHtml={props.text}>Demo</div>;
}

export default Demo;
`,
  { jsx: true }
);

writeFileSync("./scripts/res.json", JSON.stringify(res, null, 2));
