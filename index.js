///dev/stdin
const input = require('fs').readFileSync('example.txt').toString().trim().split("\n").map((num) => Number(num))

function test(input) {
    let arr = []
    let remain = 0
    for (let j = 0; j < input[0]; j++) {
        arr.push([])
    }

    for (let i = 1; i <= input[0]; i++) {
        if (input[i] % 25 >= 1) {
            remain = input[i] % 25
            arr[i -1].push(Math.floor(input[i] / 25))
        }else{
            arr[i -1].push(input[i] / 25);
        }
        if (remain % 10 >= 1) {
            arr[i -1].push(Math.floor(remain / 10))
            remain = remain % 10
        }else{
            arr[i -1].push(remain / 10);
        }
        if (remain % 5 >= 1) {
            arr[i -1].push(Math.floor(remain / 5));
            remain = remain % 5
        }else{
            arr[i -1].push(remain / 5);
        }

        if (remain != 0) {
            arr[i -1].push(remain / 1);
        }else{
            arr[i -1].push(0)
        }
        remain = 0
        console.log(arr[i -1].join(" "));
    }
}
test(input)