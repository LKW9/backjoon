// 문제
// 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.

// 출력
// N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.

const input = require('fs').readFileSync('example.txt').toString().trim().split("\n")
function test(input) {
    let arr = []
    let num = +input
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
          num /= i;
          arr.push(i);
        }
        if (num === 1) break;
      }
    arr.map(a => console.log(a))
}
test(input)