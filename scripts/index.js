const esprima = require("esprima");

const res = esprima.parseModule(
  `import React from "react";

function Demo() {
  const value = 'foo';
  return <div dangerouslySetInnerHtml={value}>Demo</div>;
}

export default Demo;
`,
  { jsx: true }
);

console.log("res: ", res);
console.log(res.body[1].body);
console.log(res.body[1].body.ReturnStatementbody[0].argument);
console.log(res.body[1].body.body[0].argument);
