const esprima = require("esprima");
const { writeFileSync } = require("fs");

const res = esprima.parseModule(
  `function Func() {}; Func.prototype.x="ab"; myFunc = new Func;
  if (source1)
  myFunc[source2]=myFunc.x+source1; // internal property tampering
  sink(myFunc.x); // taint-style vulnerability like command injection;
`,
  { jsx: false }
);

writeFileSync("./scripts/odg.json", JSON.stringify(res, null, 2));
