// 문제
// 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

// 입력
// 세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

// 출력
// 직사각형의 네 번째 점의 좌표를 출력한다.

const input = require('fs').readFileSync('example.txt').toString().trim().split("\n")
function test(input) {
    let arr = [[],[]]
    for (let i = 0; i < input.length; i++) {
        let num = input[i].split(" ").map(a => Number(a))
        arr[0].indexOf(num[0]) == -1 ? 
        arr[0].push(num[0]):arr[0][arr[0].indexOf(num[0])] = ""

        arr[1].indexOf(num[1]) == -1 ? 
        arr[1].push(num[1]):arr[1][arr[1].indexOf(num[1])] = ""
    }
    console.log(arr[0].join("") +" "+ arr[1].join(""));
}
test(input)
