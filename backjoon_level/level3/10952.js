// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 입력의 마지막에는 0 두 개가 들어온다.

// 출력
// 각 테스트 케이스마다 A+B를 출력한다.

const input = require('fs').readFileSync('example.txt').toString().split("\n")
function test(a) {
    let str = ""
    for (let i = 0; i < a.length; i++) {
        const arr = a[i].split(" ")
        if (arr[0] != 0 && arr[1] != 0) {
            str += parseInt(arr[0]) + parseInt(arr[1]) + "\n"
        }
    }
    console.log(str);
}
test(input)