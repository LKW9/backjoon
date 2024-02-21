// 문제
// 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

///dev/stdin
const input = require('fs').readFileSync('example.txt').toString().trim().split(" ")
function test(input) {
    for (let i = 1; i < input; i++) {
        const a = input -i
        const b = 2*i -1
        console.log(" ".repeat(a) + "*".repeat(b));
    }

    for (let j = input; j > 0; j--) {
        const a = input -j
        const b = 2*j -1
        console.log(" ".repeat(a) + "*".repeat(b));
    }
}
test(input)
