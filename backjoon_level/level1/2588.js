///dev/stdin
const input = require("fs").readFileSync("example.txt").toString().split("\n")
const a = input[0]
const b = input[1].split("")
console.log(a * b[2]);
console.log(a * b[1]);
console.log(a * b[0]);
console.log(input[0] * input[1]);