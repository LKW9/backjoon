const input = require('fs').readFileSync('example.txt').toString().split(' ')
console.log(parseInt(input[0]) + parseInt(input[1]));
console.log(parseInt(input[0]) - parseInt(input[1]));
console.log(parseInt(input[0]) * parseInt(input[1]));
console.log(Math.floor(parseInt(input[0]) / parseInt(input[1])));
console.log(parseInt(input[0]) % parseInt(input[1]));