// 문제
// 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

// 1/1	1/2	1/3	1/4	1/5	…
// 2/1	2/2	2/3	2/4	…	…
// 3/1	3/2	3/3	…	…	…
// 4/1	4/2	…	…	…	…
// 5/1	…	…	…	…	…
// …	…	…	…	…	…
// 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.

// X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.

// 출력
// 첫째 줄에 분수를 출력한다.

///dev/stdin
const input = require('fs').readFileSync('example.txt').toString().trim()

function test(input) {
    let a = 1
    let b = 1
    while(a < input){
        a += b +1
        b++
    }

    if (b % 2 === 0) {
        console.log(`${b - (a - input +1) +1}/${a - input +1}`);
    }else{
        console.log(`${a - input +1}/${b - (a - input +1) +1}`);
    }
}
test(input)
