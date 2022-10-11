const { parse, resolve, toString, toArray } = require('@estilles/expression-parser');
const process = require('process');
const expression = process.argv.slice(2);
const postResult = expression.toString();
const fixResult = toString(parse(postResult));

console.log(`This is the infix expression ${expression}`);
console.log(`This is the postfix expression ${fixResult}`);
