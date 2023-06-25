const esprima = require("esprima");
const { writeFileSync, readFileSync } = require("fs");

const example_code = readFileSync("./scripts/25572.jsx", "utf-8");
console.log("example_code: ", example_code);

const res = esprima.parseModule(example_code, { jsx: true });
writeFileSync("./scripts/25572.json", JSON.stringify(res, null, 2));
