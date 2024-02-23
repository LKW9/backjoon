// 문제
// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// 입력
// 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

// 출력
// 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

///dev/stdin
const input = require('fs').readFileSync('example.txt').toString().trim()
function test(input) {
    const str = input.toUpperCase()
    const arr = {}
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (arr[str[i]] == null) {
            arr[str[i]] = 1
        }else{
            arr[str[i]] += 1
        }
    }
    const val = Object.values(arr)
    let max = Math.max(...val)

    for (let j = 0; j < val.length; j++) {
        if(val[j] == max){
            count += 1
        }
    }
    
    if (1 == count) {
        console.log(Object.keys(arr)[val.indexOf(max)]);
    }else{
        console.log("?");
    }
}
test(input)