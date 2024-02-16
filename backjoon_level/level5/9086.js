// 문제
// 문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

// 입력
// 입력의 첫 줄에는 테스트 케이스의 개수 T(1 ≤ T ≤ 10)가 주어진다. 각 테스트 케이스는 한 줄에 하나의 문자열이 주어진다. 문자열은 알파벳 A~Z 대문자로 이루어지며 알파벳 사이에 공백은 없으며 문자열의 길이는 1000보다 작다.

// 출력
// 각 테스트 케이스에 대해서 주어진 문자열의 첫 글자와 마지막 글자를 연속하여 출력한다.

const input = require('fs').readFileSync('example.txt').toString().trim().split("\n")
function test(input) {
    for (let i = 1; i < +input[0] + 1; i++) {
        console.log(input[i].slice(0,1) + input[i].slice(-1));
    }
}
test(input)