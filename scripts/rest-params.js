const esprima = require("esprima");

const code = `
  const { name, age, ...rest } = { name: 'John', age: 30, city: 'New York', country: 'USA' };
`;

const ast = esprima.parseScript(code);

console.log(ast);
console.log(ast.body[1].declarations[0].init.elements);
