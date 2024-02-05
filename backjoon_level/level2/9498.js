// 문제
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

const input = require('fs').readFileSync('example.txt').toString()

function test(a){
    if(a >= 90){
        return "A"
    }else if(a >= 80){
        return "B"
    }else if(a >= 70){
        return "C"
    }else if(a >= 60){
        return "D"
    }else{
        return "F"
    }
}

console.log(test(input));