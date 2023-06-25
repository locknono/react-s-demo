const acorn = require("acorn");

function generateAST(code) {
  const ast = acorn.parse(code, { ecmaVersion: 2020, sourceType: "module" });
  return ast;
}

// Example usage
const codeSnippet = `
function add(a, b) {
  return a + b;
}
`;

const ast = generateAST(codeSnippet);
console.log(ast);
