const { writeFileSync, readFileSync } = require("fs");

const example_code = readFileSync("./src/components/panel.tsx", "utf-8");
console.log("example_code: ", example_code);

const res = require("@babel/parser").parse(example_code, {
  // parse in strict mode and allow module declarations
  sourceType: "module",

  plugins: [
    // enable jsx and flow syntax
    "jsx",
    "typescript",
  ],
});

writeFileSync("./scripts/babel/22462.json", JSON.stringify(res, null, 2));

console.log("res", res);
