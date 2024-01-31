///dev/stdin
const input = require("fs").readFileSync("example.txt").toString().split(" ")
console.log((parseInt(input[0]) + parseInt(input[1])) % parseInt(input[2]));
console.log(((parseInt(input[0]) % parseInt(input[2])) + (parseInt(input[1]) % parseInt(input[2]))) % parseInt(input[2]));
console.log((parseInt(input[0]) * parseInt(input[1])) % parseInt(input[2]));
console.log(((parseInt(input[0]) % parseInt(input[2])) * (parseInt(input[1]) % parseInt(input[2]))) % parseInt(input[2]));